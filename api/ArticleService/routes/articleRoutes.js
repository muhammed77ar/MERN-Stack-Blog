const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const fs = require('fs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/' });
const Article = require('../models/Article');


const SECRET_KEY = process.env.SECRET_KEY;


router.use(cookieParser());




router.post('/', uploadMiddleware.single('image'), async (req,res) => {
    const {originalname,path} = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path+'.'+ext;
    fs.renameSync(path, newPath);
  
    const {token} = req.cookies;
    jwt.verify(token, SECRET_KEY, {}, async (err,info) => {
      if (err) throw err;
      const {title,summary,content} = req.body;
      const articleDoc = await Article.create({
        title,
        summary,
        image:newPath,
        content,
        author:{_id :  mongoose.Types.ObjectId.createFromHexString(info.id) ,email:info.email,username :info.username},
      });
      res.json(articleDoc);
    });
  
  });



router.get('/', async (req, res) => {
   
    try {
        const articles = await Article.find({}).sort({ createdAt: -1 })
        res.status(200).json(articles);
    } catch (error) {
        console.error('Error fetching articles:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

router.get('/:id', async (req, res) => {
  const {id} = req.params;
  try {
    const article = await Article.findById(id);
    res.json(article);
  } catch (error) {
    console.error('Error fetching articles:', error);
    res.status(500).json({ error: 'Server error' });
  }
  
})

router.put('/:id', uploadMiddleware.single('image'), async (req, res) => {
  let newPath = null;
  if (req.file) {
    const { originalname, path } = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    newPath = path + '.' + ext;
    fs.renameSync(path, newPath);
  }

  const { token } = req.cookies;
  jwt.verify(token, SECRET_KEY, {}, async (err, info) => {
    if (err) throw err;
    const { id, title, summary, content } = req.body;
    try {
      const article = await Article.findById(id);
      if (!article) {
        return res.status(404).json({ error: 'Article not found' });
      }
      const isAuthor = article.author._id.toString() === info.id;
      if (!isAuthor) {
        return res.status(403).json({ error: 'You are not the author of this article' });
      }

      // Update article fields
      article.title = title;
      article.summary = summary;
      article.content = content;
      article.image = newPath || article.image; // Only update image if newPath exists

      // Save updated article
      await article.save();
      res.json(article);
    } catch (error) {
      console.error('Error updating article:', error);
      res.status(500).json({ error: 'Server error' });
    }
  });
});


module.exports = router;

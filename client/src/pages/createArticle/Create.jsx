import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CreateStyle, FormContainer, StyledButton, StyledFileInput, StyledInput} from "./StyledCreate";
import AuthNavbar from "../../components/authNavbar/AuthNavbar";

export default function Create() {
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");
    const [file, setFile] = useState(null); // State to hold the selected file
    const navigate = useNavigate()

  
    async function createNewPost(ev) {
      ev.preventDefault();
  
      const formData = new FormData();
      formData.append("title", title);
      formData.append("summary", summary);
      formData.append("content", content);
      if (file) {
        formData.append("image", file);
      }
  
      try {
        axios.defaults.withCredentials = true;
        const response = await axios.post(`${import.meta.env.VITE_ARTICLE_SERVICE}/articles`, formData);
        if (response) {
          navigate("/auth/home")
        } else {
          console.error("Failed to create post:", response);
        }
      } catch (error) {
        console.error("Error creating post:", error);
      }
    }
  
  
    return (
      <>
      <AuthNavbar />
      <CreateStyle>
        <h1>Create a new article</h1>
      <FormContainer>
      <form onSubmit={createNewPost}>
        <StyledInput
          type="text"
          placeholder="Title"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
        <StyledInput
          type="text"
          placeholder="Summary"
          value={summary}
          onChange={(ev) => setSummary(ev.target.value)}
        />
        <StyledFileInput
          type="file"
          onChange={(ev) => setFile(ev.target.files[0])}
        />
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          placeholder="Write something amazing..."
          style={{ marginBottom: '20px'}}
        />
        <StyledButton type="submit">
          Post
        </StyledButton>
      </form>
    </FormContainer>
    </CreateStyle>
    </>
    );
}

import { useEffect, useState } from 'react';
import { EditStyle, FormContainer, StyledButton, StyledFileInput, StyledInput } from './StyledEditArticle';
import AuthNavbar from '../../components/authNavbar/AuthNavbar';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';

export default function EditArticle() {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchArticle = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${import.meta.env.VITE_ARTICLE_SERVICE}/articles/${id}`);
                const article = response.data;
                setTitle(article.title);
                setSummary(article.summary);
                setContent(article.content);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching article:", error);
                setLoading(false);
            }
        };

        fetchArticle();
    }, [id]);

    const handleEdit = async (ev) => {
        ev.preventDefault();

        const formData = new FormData();
        formData.append("id", id)
        formData.append("title", title);
        formData.append("summary", summary);
        formData.append("content", content);
        if (file) {
            formData.append("image", file);
        }

        try {
            axios.defaults.withCredentials = true;
            
            const response = await axios.put(`${import.meta.env.VITE_ARTICLE_SERVICE}/articles/${id}`, formData);
            if (response) {
                navigate("/auth/home");
            } else {
                console.error("Failed to edit article:", response);
            }
        } catch (error) {
            console.error("Error editing article:", error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <AuthNavbar />
            <EditStyle>
                <h1>Edit This Article</h1>
                <FormContainer>
                    <form onSubmit={handleEdit}>
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
                            style={{ marginBottom: '20px' }}
                        />
                        <StyledButton type="submit">
                            Edit
                        </StyledButton>
                    </form>
                </FormContainer>
            </EditStyle>
        </>
    );
}

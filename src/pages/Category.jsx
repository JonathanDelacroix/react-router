import { useParams, useNavigate } from 'react-router';
import { Button } from 'react-bootstrap';

const Category = () => {
    const { category } = useParams();
    const navigate = useNavigate();
    
    const handleBackToHome = () => {
        navigate('/');
    };
    
    return (
        <div>
            <h1>Catégorie : {category}</h1>
            <Button variant="outline-danger" onClick={handleBackToHome} className="mb-3">
                Retour
            </Button>
        </div>
    );
};

export default Category;
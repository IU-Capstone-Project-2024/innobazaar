import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import Sidebar from './Sidebar';
import Footer from '../Footer/Footer';

const ProductDescriptionGenerator = () => {
    const [productName, setProductName] = useState('');
    const [productKeywords, setProductKeywords] = useState('');
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer YOUR_API`
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [{
                        role: "system",
                        content: `Generate a product description based on the following details:\nTitle: ${productName}\nKeywords: ${productKeywords}`
                    }],
                    max_tokens: 150
                })
            });

            const data = await response.json();
            console.log(data);
            const generatedDescription = data.choices[0].message.content;
            setDescription(generatedDescription);
            setError('');
        } catch (error) {
            console.error('Error generating product description:', error);
            setError('Failed to generate product description. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Header />
            <div className="container mt-4 full-height">
                <div className='row'>
                    <div className='col-md-3 col-12 mb-2'>
                        <Sidebar />
                    </div>
                    <div className='col-md-9 col-12'>
                        <h1 className="mb-4">Product Description Generator</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="productName" className="form-label">Product Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="productName"
                                    value={productName}
                                    onChange={(e) => setProductName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="productKeywords" className="form-label">Product Keywords</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="productKeywords"
                                    value={productKeywords}
                                    onChange={(e) => setProductKeywords(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary" disabled={isLoading}>
                                {isLoading ? 'Generating...' : 'Generate Description'}
                            </button>
                        </form>
                        {error && <p className="text-danger mt-3">{error}</p>}
                        {description && (
                            <div className="mt-4">
                                <h2>Description</h2>
                                <p>{description}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductDescriptionGenerator;

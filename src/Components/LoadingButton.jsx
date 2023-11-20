import { Button } from '@nextui-org/react';
import { useState } from 'react';
import './LoadingButton.css'; // Import the CSS for the spinner

const LoadingButton = ({ text }) => {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000); // Simulate async action
    };

    return (
        <Button auto color="gradient" disabled={loading} onClick={handleClick}>
            {loading ? <div className="spinner"></div> : text}
        </Button>
    );
};

export default LoadingButton;

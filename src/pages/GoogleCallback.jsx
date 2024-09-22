import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function GoogleCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const error = urlParams.get('error');
    
    if (code) {
      fetch('https://3.38.223.22/api/oauth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: code })
      })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'oauth login successful' || data.message === 'oauth register successful') {
          navigate(`/main?name=${encodeURIComponent(data.name)}`);
        } else {
          navigate(`/main?error=Unexpected response`);
        }
      })
      .catch(error => {
        navigate(`/main?error=${encodeURIComponent(error.message)}`);
      });
    } else if (error) {
      navigate(`/main?error=${encodeURIComponent(error)}`);
    } else {
      navigate('/main');
    }
  }, [navigate]);

  return <h2>Processing Google OAuth...</h2>;
}

export default GoogleCallback;

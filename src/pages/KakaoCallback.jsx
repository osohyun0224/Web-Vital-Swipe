import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function KakaoCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const error = urlParams.get('error');
    console.log("1번")
    
    if (code) {
      fetch('https://3.38.223.22/api/oauth/kakao', {
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
  console.log("2번")
  return <h2>Processing Kakao OAuth...</h2>;
}

export default KakaoCallback;

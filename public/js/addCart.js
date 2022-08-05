const addToCart = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#item-title').value.trim();
    const price = document.querySelector('#item-price').value.trim();
  
    if (title && price) {
      const response = await fetch(`/api/`, {
        method: 'POST',
        body: JSON.stringify({ title, price }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to confirm order, please try again.');
      }
    }
  }
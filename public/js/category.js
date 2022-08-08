const viewCategory = async (event) => {
    event.preventDefault();
  
    const item_name = document.querySelector('#item_title').value.trim();
    const item_description = document.querySelector('#item_description').value.trim();
    const price = document.querySelector('#item_price').value.trim();
  
    if (item_name && price) {
      const response = await fetch(`/api/item`, {
        method: 'POST',
        body: JSON.stringify(
          { 
            item_name,
            item_description,
            price,
            stock,
         }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to confirm item, please try again.');
      }
    }
}
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    const content = document.getElementById('content');
    
    // Simulate a delay for the loading screen
    setTimeout(() => {
      loadingScreen.style.display = 'none';
      content.style.display = 'block';
    }, 2000); // 2 seconds delay
  });
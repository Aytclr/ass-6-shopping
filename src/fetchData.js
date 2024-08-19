


// Async fonksiyon tanımlıyoruz
async function fetchData() {
  try {
    // Fetch ile API'den veri çekiyoruz
    const response = await fetch("https://anthonyfs.pythonanywhere.com/api/products/");

    // Eğer yanıt başarılı değilse hata fırlat
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Yanıtı JSON formatına dönüştürüyoruz
    const data = await response.json();

    // JSON formatındaki veriyi konsola yazdırıyoruz
    console.log(data);

  } catch (error) {
    // Hata varsa yakala ve konsola yazdır
    console.error('There was a problem with the fetch operation:', error);
  }
}

// Fonksiyonu çağırıyoruz
fetchData();


export default fetchData;
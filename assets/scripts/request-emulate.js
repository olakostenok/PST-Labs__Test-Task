const requestEmulate = async function (url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Ошибка по адресу ${url}, 
        статус ошибки ${response.status}!`);
  }
  return await response.json();
};

export default requestEmulate;

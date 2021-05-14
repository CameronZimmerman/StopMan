export const getResponse = async (method, body = "", url = "") => {
  const MethodsWithBody = ['POST', 'PUT']
  const response = await fetch(url, {
    method,
    body: MethodsWithBody.includes(method)? body: null,
    headers: {'Content-Type': 'application/json'}
  })
  const json = await response.json();
  return JSON.stringify(json, null, 2)
}
const API = 'https://script.google.com/macros/s/AKfycbx9j7r78Zz4DAM7xK8lXY80FyivFo56QZmlo2BpXiIeBTBRaMYKT3x_Yns0HVTBYyRI/exec';

function api(d) {
  return fetch(API, {
    method: 'POST',
    body: JSON.stringify(d)
  }).then(r => r.json());
}

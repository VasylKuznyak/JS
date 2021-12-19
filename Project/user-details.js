let details = JSON.parse(localStorage.getItem('info'));
let divDetail = document.createElement('div');
divDetail.innerHTML = `
<p>id: ${details.id}</p>
<h1>Name: ${details.name}</h1>
<h2>User Name: ${details.username}</h2>
<h3>Email: ${details.email}</h3>
<p>Adress: ${details.address.street}, ${details.address.suite},
${details.address.city}</p>
<h5>Zip Code: ${details.address.zipcode}, Geolocation: ${details.address.geo.lat}, ${details.address.geo.lng}</h5>
<h5> Phone: ${details.phone}. Website: ${details.website}</h5>
<h4> Company: ${details.company.name}. Phrase: ${details.company.name}</h4>
<p>bs: ${details.company.bs}</p>
`;
let detailButton = document.createElement('button');
detailButton.innerText = 'post of current user';

divDetail.appendChild(detailButton);
document.body.appendChild(divDetail);

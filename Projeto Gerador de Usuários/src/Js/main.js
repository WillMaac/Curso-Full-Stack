document.addEventListener("DOMContentLoaded", loadUser);
async function loadUser() {
    try {
        const response = await fetch('https://randomuser.me/api/?nat=br');
        const data = await response.json();
        const user = data.results[0];

        
        document.getElementById("user-image").src = user.picture.large;
        document.getElementById("user-name").innerText = `${user.name.first} ${user.name.last}`;
        document.getElementById("user-email").innerText = user.email;
        document.getElementById("user-location").innerText = `${user.location.city}, ${user.location.country}`;
    } catch (error) {
        console.error("Erro ao carregar usuário:", error);
    }
}


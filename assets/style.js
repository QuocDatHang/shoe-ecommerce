


const renderProduct = (obj) => {
    return `
            <div class="col">
                <div class="card">
                    <img src="${obj.img}"
                        class="card-img-top h-50" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${obj.title}</h5>
                        <div class="d-flex">
                            <div class="cols-2">
                                <i class="fa-solid fa-star fa-xs" style="color: #f4f41a;"></i>
                                <i class="fa-solid fa-star fa-xs" style="color: #f4f41a;"></i>
                                <i class="fa-solid fa-star fa-xs" style="color: #f4f41a;"></i>
                                <i class="fa-solid fa-star fa-xs" style="color: #f4f41a;"></i>
                            </div>
                            <div class="cols-2">(${obj.reviews} viewers)</div>
                        </div>
                        <div class="d-flex align-items-center mt-2">
                            <span class="oldPrice">$${obj.prevPrice}</span>
                            <span>$${obj.newPrice}</span>
                            <i class="fa-solid fa-cart-arrow-down fa-lg"></i>
                        </div>
                    </div>
                </div>
            </div>
            `
};


async function getByCompany(company) {
    var response = await fetch("https://jsonserver-vercel-api.vercel.app/products");
    var products = await response.json();
    products.forEach(item => {
        if (item.company == company) {
            var strProduct = renderProduct(item);
            $('#showProduct').append(strProduct);
        }
    });
}

async function getAllNike() {
    var response = await fetch("https://jsonserver-vercel-api.vercel.app/products");
    var products = await response.json();
    products.forEach(item => {
        if (item.company == 'Nike') {
            var strProduct = renderProduct(item);
            $('#showProduct').append(strProduct);
        }
    })
}


$(document).ready(function async () {
    console.log('hi');
});

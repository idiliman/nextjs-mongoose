import Product from "@/model/product"

export async function getProducts(req, res){
    try {
        const product = await Product.find({})

        if(!Product) return res.status(404).json( { error: "Data not Found"})
        res.status(200).json(product)
    } catch (error) {
        res.status(404).json( { error : "Error While Fetching Data"})
    }
}
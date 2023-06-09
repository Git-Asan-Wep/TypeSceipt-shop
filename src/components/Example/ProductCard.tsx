import React, {FC} from 'react';
import {IProduct} from "../interfake/interface";

 interface IProductCard {
    product: IProduct

}

const ProductCard: FC<IProductCard> = ({product}) => {


    return (
        <div className="container">

          <div className=' gou my-[50px]'>
              <div
                  className=" btn max-w-sm p-6 flex items-center justify-center flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div>
                      <img className="img" src={product.image} width={280} alt=""/>
                  </div>
                  <h3 className='my-[20px]'>{product.title}</h3>

                  <button type="button"
                          className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Перейти в
                  </button>

              </div>
          </div>

        </div>
    );
};

export default ProductCard;

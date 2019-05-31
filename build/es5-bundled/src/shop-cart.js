define(["./shop-app.js"],function(_shopApp){"use strict";function _templateObject_c90a1fd0835a11e9b0497f6309c2d50e(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style include=\"shop-common-styles shop-button shop-form-styles\">\n\n      .list {\n        margin: 40px 0;\n      }\n\n      .checkout-box {\n        font-weight: bold;\n        text-align: right;\n        margin-right: 10px;\n      }\n\n      .subtotal {\n        margin: 0 64px 0 24px;\n      }\n\n      @media (max-width: 767px) {\n\n        .subtotal {\n          margin: 0 0 0 24px;\n        }\n\n      }\n\n    </style>\n\n    <div class=\"main-frame\">\n      <div class=\"subsection\" visible$=\"[[!_hasItems]]\">\n        <p class=\"empty-cart\">Your <iron-icon icon=\"shopping-cart\"></iron-icon> is empty.</p>\n      </div>\n      <div class=\"subsection\" visible$=\"[[_hasItems]]\">\n        <header>\n          <h1>Your Cart</h1>\n          <span>([[_getPluralizedQuantity(cart.length)]])</span>\n        </header>\n        <div class=\"list\">\n          <dom-repeat items=\"[[cart]]\" as=\"entry\">\n            <template>\n              <shop-cart-item entry=\"[[entry]]\"></shop-cart-item>\n            </template>\n          </dom-repeat>\n        </div>\n        <div class=\"checkout-box\">\n          Total: <span class=\"subtotal\">[[_formatTotal(total)]]</span>\n          <shop-button responsive>\n            <a href=\"/checkout\">Checkout</a>\n          </shop-button>\n        </div>\n      </div>\n    </div>\n    "]);_templateObject_c90a1fd0835a11e9b0497f6309c2d50e=function _templateObject_c90a1fd0835a11e9b0497f6309c2d50e(){return data};return data}var ShopCart=function(_PolymerElement){babelHelpers.inherits(ShopCart,_PolymerElement);function ShopCart(){babelHelpers.classCallCheck(this,ShopCart);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ShopCart).apply(this,arguments))}babelHelpers.createClass(ShopCart,[{key:"_formatTotal",value:function _formatTotal(total){return isNaN(total)?"":"$"+total.toFixed(2)}},{key:"_computeHasItem",value:function _computeHasItem(cartLength){return 0<cartLength}},{key:"_getPluralizedQuantity",value:function _getPluralizedQuantity(quantity){return quantity+" "+(1===quantity?"item":"items")}},{key:"_visibleChanged",value:function _visibleChanged(visible){if(visible){this.dispatchEvent(new CustomEvent("change-section",{bubbles:!0,composed:!0,detail:{title:"Your cart"}}))}}}],[{key:"template",get:function get(){return(0,_shopApp.html)(_templateObject_c90a1fd0835a11e9b0497f6309c2d50e())}},{key:"is",get:function get(){return"shop-cart"}},{key:"properties",get:function get(){return{total:Number,cart:Array,visible:{type:Boolean,observer:"_visibleChanged"},_hasItems:{type:Boolean,computed:"_computeHasItem(cart.length)"}}}}]);return ShopCart}(_shopApp.PolymerElement);customElements.define(ShopCart.is,ShopCart)});
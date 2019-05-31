define(["./shop-app.js"],function(_shopApp){"use strict";function _templateObject_c90739a0835a11e9b0497f6309c2d50e(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style include=\"shop-common-styles shop-button shop-select\">\n\n      :host {\n        display: block;\n      }\n\n      #content {\n        @apply --layout-horizontal;\n        @apply --layout-center-justified;\n      }\n\n      shop-image {\n        position: relative;\n        margin: 64px 32px;\n        width: 50%;\n        max-width: 600px;\n        --shop-image-img: {\n          @apply --layout-fit;\n        };\n      }\n\n      shop-image::before {\n        content: \"\";\n        display: block;\n        padding-top: 100%;\n      }\n\n      .detail {\n        margin: 64px 32px;\n        width: 50%;\n        max-width: 400px;\n        transition: opacity 0.4s;\n        opacity: 0;\n      }\n\n      .detail[has-content] {\n        opacity: 1;\n      }\n\n      h1 {\n        font-size: 24px;\n        font-weight: 500;\n        line-height: 28px;\n        margin: 0;\n      }\n\n      .price {\n        margin: 16px 0 40px;\n        font-size: 16px;\n        color: var(--app-secondary-color);\n      }\n\n      .description {\n        margin: 32px 0;\n      }\n\n      .description > h2 {\n        margin: 16px 0;\n        font-size: 13px;\n      }\n\n      .description > p {\n        margin: 0;\n        color: var(--app-secondary-color);\n      }\n\n      .pickers {\n        @apply --layout-vertical;\n        border-top: 1px solid #ccc;\n      }\n\n      shop-select > select {\n        font-size: 16px;\n        padding: 16px 24px 16px 70px;\n      }\n\n      @media (max-width: 767px) {\n\n        #content {\n          @apply --layout-vertical;\n          @apply --layout-center;\n        }\n\n        shop-image {\n          margin: 0;\n          width: 80%;\n        }\n\n        .detail {\n          box-sizing: border-box;\n          margin: 32px 0;\n          padding: 0 24px;\n          width: 100%;\n          max-width: 600px;\n        }\n\n        h1 {\n          font-size: 20px;\n          line-height: 24px;\n        }\n\n        .price {\n          font-size: inherit;\n          margin: 12px 0 32px;\n        }\n\n      }\n\n    </style>\n\n    <!--\n      app-route provides the name of the category and the item.\n    -->\n    <app-route\n        route=\"[[route]]\"\n        pattern=\"/:category/:item\"\n        data=\"{{routeData}}\"></app-route>\n\n    <!--\n      shop-category-data provides the item data for a given category and item name.\n    -->\n    <shop-category-data\n        id=\"categoryData\"\n        category-name=\"[[routeData.category]]\"\n        item-name=\"[[routeData.item]]\"\n        item=\"{{item}}\"\n        failure=\"{{failure}}\"></shop-category-data>\n\n    <div id=\"content\" hidden$=\"[[failure]]\">\n      <shop-image alt=\"[[item.title]]\" src=\"[[item.largeImage]]\"></shop-image>\n      <div class=\"detail\" has-content$=\"[[_isDefined(item)]]\">\n        <h1>[[item.title]]</h1>\n        <div class=\"price\">[[_formatPrice(item.price)]]</div>\n        <div class=\"pickers\">\n          <shop-select>\n            <label id=\"sizeLabel\" prefix>Size</label>\n            <select id=\"sizeSelect\" aria-labelledby=\"sizeLabel\">\n              <option value=\"XS\">XS</option>\n              <option value=\"S\">S</option>\n              <option value=\"M\" selected>M</option>\n              <option value=\"L\">L</option>\n              <option value=\"XL\">XL</option>\n            </select>\n            <shop-md-decorator aria-hidden=\"true\">\n              <shop-underline></shop-underline>\n            </shop-md-decorator>\n          </shop-select>\n          <shop-select>\n            <label id=\"quantityLabel\" prefix>Quantity</label>\n            <select id=\"quantitySelect\" aria-labelledby=\"quantityLabel\">\n              <option value=\"1\" selected>1</option>\n              <option value=\"2\">2</option>\n              <option value=\"3\">3</option>\n              <option value=\"4\">4</option>\n              <option value=\"5\">5</option>\n            </select>\n            <shop-md-decorator aria-hidden=\"true\">\n              <shop-underline></shop-underline>\n            </shop-md-decorator>\n          </shop-select>\n        </div>\n        <div class=\"description\">\n          <h2>Description</h2>\n          <p id=\"desc\"></p>\n        </div>\n        <shop-button responsive>\n          <button on-click=\"_addToCart\" aria-label=\"Add this item to cart\">Add to Cart</button>\n        </shop-button>\n      </div>\n    </div>\n\n    <!--\n      shop-network-warning shows a warning message when the items can't be rendered due\n      to network conditions.\n    -->\n    <shop-network-warning\n        hidden$=\"[[!failure]]\"\n        offline=\"[[offline]]\"\n        on-try-reconnect=\"_tryReconnect\"></shop-network-warning>\n    "]);_templateObject_c90739a0835a11e9b0497f6309c2d50e=function _templateObject_c90739a0835a11e9b0497f6309c2d50e(){return data};return data}var ShopDetail=function(_PolymerElement){babelHelpers.inherits(ShopDetail,_PolymerElement);function ShopDetail(){babelHelpers.classCallCheck(this,ShopDetail);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ShopDetail).apply(this,arguments))}babelHelpers.createClass(ShopDetail,[{key:"_itemChanged",value:function _itemChanged(item,visible){var _this=this;if(visible){this._itemChangeDebouncer=_shopApp.Debouncer.debounce(this._itemChangeDebouncer,_shopApp.microTask,function(){var text=item?item.description:"";_this.$.desc.innerHTML=_this._unescapeText(text);_this.$.quantitySelect.value="1";_this.$.sizeSelect.value="M";_this.dispatchEvent(new CustomEvent("change-section",{bubbles:!0,composed:!0,detail:{category:item?item.category:"",title:item?item.title:"",description:item?item.description.substring(0,100):"",image:item?_this.baseURI+item.image:""}}))})}}},{key:"_unescapeText",value:function _unescapeText(text){var elem=document.createElement("textarea");elem.innerHTML=text;return elem.textContent}},{key:"_formatPrice",value:function _formatPrice(price){return price?"$"+price.toFixed(2):""}},{key:"_addToCart",value:function _addToCart(){this.dispatchEvent(new CustomEvent("add-cart-item",{bubbles:!0,composed:!0,detail:{item:this.item,quantity:parseInt(this.$.quantitySelect.value,10),size:this.$.sizeSelect.value}}))}},{key:"_isDefined",value:function _isDefined(item){return null!=item}},{key:"_tryReconnect",value:function _tryReconnect(){this.$.categoryData.refresh()}},{key:"_offlineChanged",value:function _offlineChanged(offline){if(!offline){this._tryReconnect()}}}],[{key:"template",get:function get(){return(0,_shopApp.html)(_templateObject_c90739a0835a11e9b0497f6309c2d50e())}},{key:"is",get:function get(){return"shop-detail"}},{key:"properties",get:function get(){return{item:Object,route:Object,routeData:Object,visible:{type:Boolean,value:!1},offline:{type:Boolean,observer:"_offlineChanged"},failure:Boolean}}},{key:"observers",get:function get(){return["_itemChanged(item, visible)"]}}]);return ShopDetail}(_shopApp.PolymerElement);customElements.define(ShopDetail.is,ShopDetail)});
import React, {useState, useEffect, useRef} from 'react';
import RatingsModal from '../RatingsModal/RatingsModal.jsx';
import {
  ProductInfoContainer,
  Container,
  Row,
  Button,
  Price,
  SaleText,
  Savings,
  Ratings,
  Stars,
  Select,
  SelectLabel,
  Promo
} from './style.js';

const ProductInfo = ({ productData }) => {
  const [showRatingsModal, setShowRatingsModal] = useState(false);

  const ref = useRef(null);


  const { price_reg, price_discount, sale_end, ratings_data, total_questions, promo_data } = productData;
  const { five_star, four_star, three_star, two_star, one_star} = ratings_data;

  // Math for discounts
  const discountAmt = (price_reg - price_discount).toFixed(2);
  const discountPercent = Math.round(discountAmt / price_reg * 100);

  //Math for star ratings
  const stars = [five_star, four_star, three_star, two_star, one_star];
  const totalRatings = five_star + four_star + three_star + two_star + one_star;
  const avgRating = ((five_star * 5 + four_star * 4 + three_star * 3 + two_star * 2 + one_star) / totalRatings).toFixed(1);
  const starPercent = avgRating / 5 * 100;

  let date = new Date(sale_end);
  date = date.toLocaleString("en-US", {
    // timeStyle: "short",
    dateStyle: "short"
  });


  return (
    <ProductInfoContainer>
      <Container>
        <SaleText>
          <Price
            sale={sale_end}>{price_discount ? `$${price_discount.toFixed(2)}` : `$${price_reg.toFixed(2)}`}
          </Price>
          <span className="sale">Sale</span>
          <span className="date">{` ends ${date}`}</span>
        </SaleText>
      </Container>
      <Savings>
        {`reg $${price_reg.toFixed(2)} Save $${discountAmt} (${discountPercent}% off)`}
      </Savings>
      <Ratings>
        <button className="ratings-button"
          onClick={() => {
            console.log('???')
            setShowRatingsModal(!showRatingsModal);
          }}>
          <Stars starPercent={starPercent}>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </Stars>

          <span className="total-ratings">{totalRatings}</span>
          <span className="chevron">﹀</span>
          {showRatingsModal &&
            <RatingsModal totalRatings={totalRatings}
              avgRating={avgRating} stars={stars}
              starPercent={starPercent}
              setShowRatingsModal={setShowRatingsModal}/>}
        </button>

        <a href="#" className="questions-link">{`${total_questions} Questions`}</a>

      </Ratings>

      <Promo>
        <Row className="top-row">
          <svg className="red-card"
            width="26" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false"><g transform="translate(.438 4)" fill="none" fill-rule="evenodd"><rect fill="#C00" fill-rule="nonzero" transform="rotate(-90 11.563 8)" x="4.063" y="-3" width="15" height="22" rx="1.499"></rect><g transform="translate(3.308 5.565)"><rect fill="#BF6C30" width="2.516" height="2.006" rx=".143"></rect><path d="M.4778 1.337h.666v.227l-.6658.0004-.0002-.2275zm1.56 0l.0007.2274-.6667-.0005v-.227h.666zm0-.446v.223h-1.56V.891h1.56zm0-.223h-.666V.442h.6667l-.0007.226zm-.894-.226v.226h-.666L.478.442h.6658z" fill="#F2DA78"></path></g><path d="M15.5883 3.1875c.257 0 .4697.1488.5303.4025l.0135.0792h-.2683c-.0196-.1313-.1377-.2342-.2755-.2342-.2259 0-.3423.1892-.3423.459 0 .2513.1111.448.3423.448.1391 0 .2361-.0833.2736-.2321l.0124-.0678h.2684c-.0283.3374-.2455.5472-.5544.5472-.3848 0-.6196-.3036-.6196-.6953 0-.3954.2296-.7065.6196-.7065zm1.7745.3749c.2639 0 .4176.2015.4414.456l.0033.0707-.0016.0485h-.6584c.007.1669.0793.2455.2223.2455.0795 0 .1515-.0403.1846-.0927l.015-.0328h.2206c-.0671.2192-.2084.3261-.4272.3261-.2895 0-.466-.2117-.466-.5096 0-.2925.1906-.5117.466-.5117zm1.4551-.343v1.3381h-.2384v-.1237c-.0583.0994-.1554.15-.2806.15-.2718 0-.4096-.2436-.4096-.5192 0-.268.1413-.5021.4043-.5021.0874 0 .1728.0324.2315.0932l.0385.051h.0035v-.4874h.2508zm.8736.0787v.2906h.1835v.178h-.1835v.4798c0 .09.021.1123.106.1123l.0413-.0017.0362-.0058v.2081c-.0424.0075-.0989.0094-.1484.0094-.1682 0-.261-.0474-.2815-.1748l-.0044-.0596v-.5678h-.1517v-.178h.1517v-.2905h.2508zm-2.8823.2642l.032.0033.0227.006v.2476a.407.407 0 00-.09-.0094c-.1616 0-.2312.105-.2446.2535l-.0025.0576v.4367h-.2506v-.9689h.2382v.1799c.0512-.122.1694-.2063.2948-.2063zm2.3974.0263v.9689h-.2506v-.9689h.2506zm-.8477.1743c-.1429 0-.2188.1219-.2188.3092 0 .1537.067.311.2206.311.143 0 .2153-.1179.2153-.3129 0-.176-.0636-.3073-.217-.3073zm-1.005-.0001c-.1044 0-.1737.0579-.198.1547l-.0084.0516h.4078c-.0247-.1463-.0848-.2063-.2014-.2063zm1.7274-.5753c.0777 0 .1413.0675.1413.15 0 .0824-.0636.1499-.1413.1499-.0776 0-.1411-.0675-.1411-.1499 0-.0825.0635-.15.141-.15z" fill="#620010"></path><path d="M11.1521 11.5909c.483 0 .8762.2898.932.7753h-.4592a.4711.4711 0 00-.4711-.377c-.3864 0-.5855.305-.5855.7396 0 .4042.1898.722.5855.722.272 0 .45-.1754.4898-.4839h.4584c-.0483.544-.4195.8821-.9482.8821-.6584 0-1.0592-.4889-1.0592-1.1202h-.0017c0-.6372.3924-1.138 1.0592-1.138zm-1.171.0483v2.1556h-.4076v-.1991h-.006a.5126.5126 0 01-.4744.2465c-.444 0-.6789-.3574-.6993-.776l-.0015-.067c0-.4313.2415-.8093.6915-.8093a.5347.5347 0 01.4626.2373h.006v-.788h.4287zm6.5033 0v2.1556h-.4076v-.1991h-.0059a.5126.5126 0 01-.4745.2465c-.4652 0-.7007-.3923-.7007-.8363l.0008-.0068c0-.4312.2415-.8092.6914-.8092a.5347.5347 0 01.4618.233h.006v-.7837h.4287zm-8.947.555c.4923 0 .7626.3864.7626.8473v.078H7.1739c.0118.2686.1355.3957.3804.3957.1627 0 .3076-.0932.339-.2025h.3779c-.1153.3533-.3568.5253-.7313.5253-.4948 0-.7965-.339-.7965-.821-.0025-.4695.3228-.8228.794-.8228zm5.417-.006c.4559 0 .6779.1543.6779.444v.7516c0 .0912.014.118.0808.1229l.0395.0008v.278a.3754.3754 0 01-.178.0364c-.199 0-.3016-.0601-.3389-.2025-.1025.1237-.2838.2144-.544.2144-.3194 0-.5313-.1695-.5313-.4678h.0051a.411.411 0 01.1356-.3321c.09-.0763.2164-.1203.4328-.148l.1925-.0228c.1946-.0265.2814-.0616.2814-.1792 0-.1788-.1297-.2084-.2746-.2084-.1788 0-.272.072-.2872.2356h-.4288c.0187-.339.2991-.5229.7372-.5229zm1.8353.006a.3211.3211 0 01.094.0152v.3983a.7889.7889 0 00-.1541-.0144c-.311 0-.4237.2143-.4237.5007v.7033h-.4288l-.0025-1.5608h.4076v.2898h.0093a.549.549 0 01.4982-.3321zm-8.747-.555c.3804 0 .6312.2626.6312.5931 0 .272-.1144.45-.339.5406v.006c.2459.0688.2975.301.3133.4942l.007.1251c.0094.2026.0306.3195.0848.3949h-.4762a1.4134 1.4134 0 01-.061-.3737c-.0237-.3025-.072-.4686-.3711-.4686h-.477v.8423H4.881v-2.154h1.1617zm7.1617 1.3913c-.0341.0319-.0961.052-.2087.0686l-.0515.0068c-.2203.0271-.35.0754-.35.2449 0 .1237.0755.1991.2628.1991.2296 0 .3474-.1237.3474-.3533v-.1661zm-4.0088-.5126c-.2449 0-.3745.1957-.3745.4973 0 .2483.1144.5017.377.5017.2286 0 .3516-.1661.367-.4466l.0015-.0608c.0001-.2807-.1083-.4916-.371-.4916zm6.5042 0c-.245 0-.3745.1957-.3745.4973 0 .2483.1143.5017.377.5017.2286 0 .3516-.1661.367-.4466l.0016-.0576c0-.2839-.1084-.4948-.3711-.4948zm-8.1768 0a.3322.3322 0 00-.3491.3313h.693c-.0423-.2347-.1448-.3313-.344-.3313zm-1.649-.5076h-.5194v.6067h.522c.2 0 .3237-.0847.3237-.3076 0-.2228-.1178-.2991-.3263-.2991zm-2.592-.5728a1.2812 1.2812 0 011.282 1.282c0 .708-.574 1.282-1.282 1.282-.708 0-1.282-.574-1.282-1.282 0-.708.574-1.282 1.282-1.282zm0 .4262a.8558.8558 0 100 1.7116.8558.8558 0 000-1.7116zm0 .4169a.439.439 0 01.4398.439.4398.4398 0 11-.4926-.4358l.0528-.0032z" fill="#FFF" fill-rule="nonzero"></path><path d="M.5625 1.9988C.5625 1.171 1.2335.5 2.0613.5h19.0024c.8278 0 1.4988.671 1.4988 1.4988v12.0024c0 .8278-.671 1.4988-1.4988 1.4988H2.0613c-.8278 0-1.4988-.671-1.4988-1.4988V1.9988zm.5 0v12.0024c0 .5122.3856.9344.8823.992L2.0613 15h19.0024c.5122 0 .9344-.3856.992-.8823l.0068-.1164V1.9988c0-.5122-.3856-.9344-.8823-.992L21.0637 1H2.0613c-.5122 0-.9344.3856-.992.8823l-.0068.1165z" fill="#B30000" fill-rule="nonzero"></path></g>
          </svg>
          <span className="main-text">{promo_data.main_text}</span>
        </Row>
        <div className="sub-text">{promo_data.sub_text}</div>
        <a href="#" className="learn-more-link">{promo_data.link_text}</a>
      </Promo>

      <Select name="quantity-select">
        <SelectLabel>Quantity</SelectLabel>
        <select className="quantity-select">
          <option>1</option>
          <option>2</option>
        </select>
      </Select>

    </ProductInfoContainer>
  );
};

export default ProductInfo;
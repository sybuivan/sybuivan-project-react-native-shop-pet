import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SvgXml} from 'react-native-svg';
import {useDispatch, useSelector} from 'react-redux';
import Toast from 'react-native-toast-message';

import productApi from '../../clients/productApi';
import HeaderBack from '../../components/header-back/HeaderBack';
import Loading from '../../components/loading/Loading';
import COLOR from '../../constants/Color';
import {PathName} from '../../constants/PathNameScreen';
import formatPrice, {ramdomNumber} from '../../utils';
import {addToCart, getCarts} from '../cart/cartSlice';

const xml = `
<svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:svg="http://www.w3.org/2000/svg" id="svg10041" viewBox="0 0 181.03 147.72" version="1.1">
<defs id="defs10043">
  <filter id="filter4298-4" height="1.5" width="1.5" y="-.25" x="-.25" color-interpolation-filters="sRGB">
    <feGaussianBlur id="feGaussianBlur4300-6" result="blur" stdDeviation="4.300000" in="SourceAlpha"/>
    <feColorMatrix id="feColorMatrix4302-4" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.638000 0 " type="matrix" result="bluralpha"/>
    <feOffset id="feOffset4304-0" result="offsetBlur" in="bluralpha" dx="5.900000" dy="5.900000"/>
    <feMerge id="feMerge4306-3">
      <feMergeNode id="feMergeNode4308-0" in="offsetBlur"/>
      <feMergeNode id="feMergeNode4310-5" in="SourceGraphic"/>
    </feMerge>
  </filter>
  <filter id="filter4298" height="1.5" width="1.5" y="-.25" x="-.25" color-interpolation-filters="sRGB">
    <feGaussianBlur id="feGaussianBlur4300" result="blur" stdDeviation="4.300000" in="SourceAlpha"/>
    <feColorMatrix id="feColorMatrix4302" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.638000 0 " type="matrix" result="bluralpha"/>
    <feOffset id="feOffset4304" result="offsetBlur" in="bluralpha" dx="5.900000" dy="5.900000"/>
    <feMerge id="feMerge4306">
      <feMergeNode id="feMergeNode4308" in="offsetBlur"/>
      <feMergeNode id="feMergeNode4310" in="SourceGraphic"/>
    </feMerge>
  </filter>
  <linearGradient id="linearGradient10217" y2="552.07" gradientUnits="userSpaceOnUse" x2="209.58" gradientTransform="translate(0 .0000026172)" y1="587.36" x1="174.29">
    <stop id="stop5874" stop-color="#003296" stop-opacity=".91765" offset="0"/>
    <stop id="stop5876" stop-color="#003296" stop-opacity="0" offset="1"/>
  </linearGradient>
  <linearGradient id="linearGradient10219" y2="637.77" gradientUnits="userSpaceOnUse" x2="118.9" y1="654.57" x1="102.91">
    <stop id="stop5890" stop-color="#003296" offset="0"/>
    <stop id="stop5892" stop-color="#003296" stop-opacity="0" offset="1"/>
  </linearGradient>
</defs>
<g id="layer1" transform="translate(-154.54 -494.73)">
  <path id="path3496" d="m141.43 640.22c0 10.257-9.1142 18.571-20.357 18.571s-20.357-8.3147-20.357-18.571c0-10.257 9.1142-18.571 20.357-18.571s20.357 8.3147 20.357 18.571z" transform="matrix(.97957 0 0 .93212 80.104 15.246)" filter="url(#filter4298)" stroke="#003296" stroke-width="7.23" fill="url(#linearGradient10219)"/>
  <path id="path4342" d="m180 582.36l115-1.4286c33.571-50 33.571-50 33.571-50-148.57-12.85-149.28-12.85-149.28-12.85l0.71 64.28z" stroke="#003296" stroke-width="14" fill="url(#linearGradient10217)"/>
  <path id="path3496-4" d="m141.43 640.22c0 10.257-9.1142 18.571-20.357 18.571s-20.357-8.3147-20.357-18.571c0-10.257 9.1142-18.571 20.357-18.571s20.357 8.3147 20.357 18.571z" transform="matrix(.97957 0 0 .93212 155.69 15.246)" filter="url(#filter4298-4)" stroke="#003296" stroke-width="7.23" fill="url(#linearGradient10219)"/>
  <path id="path9842" stroke-linejoin="round" d="m179.2 513.73v-12.007h-17.664" stroke="#003296" stroke-linecap="round" stroke-width="14" fill="none"/>
  <path id="path9844" d="m320.13 547.63c-135.39-6.42-135.39-6.42-135.39-6.42" stroke="#003196" stroke-width="14" fill="none"/>
  <path id="path9844-8" d="m301.99 564.2l-118.48-0.8" stroke="#003196" stroke-width="14" fill="none"/>
  <path id="path9877" d="m204.55 575.92v-53.865" stroke="#003296" stroke-width="14" fill="none"/>
  <path id="path9877-6" d="m229.6 578.04v-53.865" stroke="#003296" stroke-width="14" fill="none"/>
  <path id="path9877-9" d="m254.65 577.29v-53.865" stroke="#003296" stroke-width="14" fill="none"/>
  <path id="path9877-65" d="m279.7 574.54v-53.865" stroke="#003296" stroke-width="14" fill="none"/>
  <path id="path9877-4" d="m304.75 561.85v-39.483" stroke="#003296" stroke-width="14" fill="none"/>
</g>
<metadata>
  <rdf:RDF>
    <cc:Work>
      <dc:format>image/svg+xml</dc:format>
      <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
      <cc:license rdf:resource="http://creativecommons.org/licenses/publicdomain/"/>
      <dc:publisher>
        <cc:Agent rdf:about="http://openclipart.org/">
          <dc:title>Openclipart</dc:title>
        </cc:Agent>
      </dc:publisher>
      <dc:title>Shopping Cart</dc:title>
      <dc:date>2010-05-13T11:31:26</dc:date>
      <dc:description>Shopping cart. Suitable for web e-commerce store. Could use it with or on an add to cart button</dc:description>
      <dc:source>http://openclipart.org/detail/60091/shopping-cart-by-sunking2</dc:source>
      <dc:creator>
        <cc:Agent>
          <dc:title>SunKing2</dc:title>
        </cc:Agent>
      </dc:creator>
      <dc:subject>
        <rdf:Bag>
          <rdf:li>add</rdf:li>
          <rdf:li>cart</rdf:li>
          <rdf:li>checkout</rdf:li>
          <rdf:li>clip art</rdf:li>
          <rdf:li>clipart</rdf:li>
          <rdf:li>e-commerce</rdf:li>
          <rdf:li>ebay</rdf:li>
          <rdf:li>ecommerce</rdf:li>
          <rdf:li>paypal</rdf:li>
          <rdf:li>shopping</rdf:li>
          <rdf:li>store</rdf:li>
        </rdf:Bag>
      </dc:subject>
    </cc:Work>
    <cc:License rdf:about="http://creativecommons.org/licenses/publicdomain/">
      <cc:permits rdf:resource="http://creativecommons.org/ns#Reproduction"/>
      <cc:permits rdf:resource="http://creativecommons.org/ns#Distribution"/>
      <cc:permits rdf:resource="http://creativecommons.org/ns#DerivativeWorks"/>
    </cc:License>
  </rdf:RDF>
</metadata>
</svg>
`;

const Card = ({navigation, data, title}) => {
  const {
    user: {user},
  } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const onItemPress = idProduct => {
    navigation &&
      navigation.navigate(PathName.details, {
        idProduct: idProduct,
        name: data.name,
        title: title,
      });
  };

  const handleSubmit = () => {
    const action = addToCart({
      idProduct: data.idProduct,
      quantity: 1,
      idUser: user.idUser,
    });
    try {
      dispatch(action).then(() => {
        Toast.show({
          type: 'success',
          text1: 'Thông báo',
          text2: 'Thêm vào giỏ hàng thành công 👋',
        });
        dispatch(getCarts(user.idUser));
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Thông báo',
        text2: 'Lỗi hệ thống :((',
      });
    }
  };

  return (
    <View
      style={{
        width: '47%',
        margin: 5,
        borderColor: '#c1c1c1',
        borderStyle: 'solid',
        borderWidth: 1,
      }}>
      <TouchableOpacity onPress={() => onItemPress(data.idProduct)}>
        <ImageBackground
          style={styles.itemHeader}
          source={{uri: data.thumbnailUrl}}
        />
        <View
          style={{
            display: 'flex',
            padding: 10,
            borderBottomColor: '#c1c1c1',
            borderStyle: 'solid',
            borderBottomWidth: 2,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              maxHeight: 50,
              height: 50,
            }}>
            {data.name}
          </Text>
          <Text>{data.categoryName}</Text>
        </View>
        <View style={styles.itemFooter}>
          <Text
            style={{
              color: COLOR.primary,
              fontWeight: '600',
            }}>
            {formatPrice(data.price)}
          </Text>
          <TouchableOpacity style={styles.iconButton} onPress={handleSubmit}>
            <SvgXml width={30} height={30} xml={xml} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const ListProduct = ({navigation, route}) => {
  const {title, id} = route.params;
  const [loading, setLoading] = useState(true);
  const [dataProducts, setDataProduct] = useState([]);

  const fetchData = async () => {
    try {
      const response = await productApi.getProductByCategory(id);
      setLoading(false);
      setDataProduct(response.data.products);
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <HeaderBack
        title={title}
        name="HomeScreen"
        onPressBack={name => navigation.navigate(name)}
      />
      {loading ? (
        <Loading />
      ) : (
        <SafeAreaView style={{flex: 1, margin: 5}}>
          <ScrollView>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                margin: 5,
                backgroundColor: COLOR.while,
              }}>
              {dataProducts?.map(data => (
                <Card
                  data={data}
                  key={data.idProduct}
                  navigation={navigation}
                  title={title}
                />
              ))}
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </React.Fragment>
  );
};

export default ListProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'background-basic-color-2',
  },
  productList: {
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  productItem: {
    flex: 1,
    margin: 8,
    maxWidth: Dimensions.get('window').width / 2 - 24,
    backgroundColor: 'background-basic-color-1',
  },
  itemHeader: {
    height: 140,
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  iconButton: {
    paddingHorizontal: 0,
  },
});

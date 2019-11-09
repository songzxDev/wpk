import TabView from "./teacher/tabview.js";
import Div from "./container.js";
import ScrollView from './teacher/scrollview.js';
import ListView from './teacher/listview';
import {create} from './teacher/create.js';
// import tree from './my.component';
import Carousel from './carouselview.js';

/*
* 禁用系统的scroll
* */
function loadMore() {
    setTimeout(() => {

        this.setAttribute('placeHolderText', 'No more');
        console.log('end', Date.now())
    }, 5000);
}

window.render = function (data, root) {
    let pictures = [
        "https://img.alicdn.com/imgextra/i4/739179444/O1CN01WomSRa2JdOw1a4KAa_!!739179444.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i1/3954877919/O1CN01pQ18Jj28MwxyqWBXe_!!3954877919.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i3/3954877919/O1CN01V0UUen28Mwy1c9xR1_!!0-item_pic.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i4/2274338009/O1CN01vC8AkK292AdnMTgq5_!!2274338009.jpg_430x430q90.jpg"
    ];
    let c = <div>
        <div style="height: 279px; background-color: #9e48ff;">
            <div style="display: flex; align-items: center; height: 100%;">
                <div style="width: 33.33%;">

                </div>
                <div style="display: flex; align-items: center;width: 33.33%; font-family: PingFangSC-Medium; font-size: 64px; font-weight: normal; font-stretch: normal; line-height: 35px; letter-spacing: 0px; color: #FFFFFF;">
                    每日好店
                </div>
                <div style="width: 33.33%;"></div>
            </div>
        </div>
        <TabView style="width:100%;height:100%;">
            <ScrollView tab-title="推荐" placeHolderText="load more" on-scrolltobottom={loadMore}
                        style="-webkit-overflow-scrolling:touch;overflow:scroll;background-color:#f8f8f9;white-space:normal;font-size:50px">
                <Carousel
                    style="margin: 28px; height: 492px; width: 924px;; overflow: hidden; white-space: nowrap;"
                    pictures={pictures}>
                </Carousel>
                <div
                    style="margin: 69px 34px 40px; height: 43px; font-family: PingFangSC-Medium; font-size: 46px; font-weight: normal; font-stretch: normal; line-height: 35px; letter-spacing: 0px; color: #333333;">
                    超多人气收藏的店
                </div>
                <div style="margin: 0 28px 35px; display: flex; width: 924px;">
                    <div
                        style="height: 361px; width: 450px; margin-right: 24px; border-radius: 18px; background-color: #fefefe;">
                        <div style="margin: 27px 35px; display: flex;">
                            <div style="width: 78px; height: 78px;"></div>
                            <div style=" height: 78px; display: flex; flex-flow: column;">
                                <div
                                    style="margin-left: 18px; height: 34px; font-family: PingFangSC-Regular; font-size: 36px; font-weight: normal; font-stretch: normal; line-height: 35px; letter-spacing: 0px; color: #333333;">
                                    极客时间旗舰店
                                </div>
                                <div
                                    style="margin:18px 0 0 18px; width: 63px; height: 30px; font-family: PingFangSC-Regular; font-size: 26px; line-height: 25px; background-color: #ee0507; border-radius: 15px; color: #FFFFFF;">天猫
                                </div>
                            </div>
                        </div>
                        <div style="margin: 0 35px 30px 35px; height: 199px; display: flex;">
                            <div style="border-radius: 18px; height: 100%; width: 199px; margin-right: 28px;">
                                <img style="border-radius: 18px; width:100%; height:100%"
                                     src="https://img.alicdn.com/imgextra/i1/3954877919/O1CN01pQ18Jj28MwxyqWBXe_!!3954877919.jpg_430x430q90.jpg"
                                     alt=""/>
                            </div>
                            <div style="border-radius: 18px; height: 100%; width: 199px;">
                                <img style="border-radius: 18px; width:100%; height:100%"
                                     src="https://img.alicdn.com/imgextra/i3/2191160435/TB19WqyqASWBuNjSszdXXbeSpXa_!!0-item_pic.jpg_430x430q90.jpg"
                                     alt=""/>
                            </div>
                        </div>
                    </div>
                    <div style="height: 361px; width: 450px; border-radius: 18px; background-color: #fefefe;">
                        <div style="margin: 27px 35px; display: flex;">
                            <div style="width: 78px; height: 78px;"></div>
                            <div style=" height: 78px; display: flex; flex-flow: column;">
                                <div
                                    style="margin-left: 18px; height: 34px; font-family: PingFangSC-Regular; font-size: 36px; font-weight: normal; font-stretch: normal; line-height: 35px; letter-spacing: 0px; color: #333333;">
                                    当当旗舰店
                                </div>
                                <div
                                    style="margin:18px 0 0 18px; width: 63px; height: 30px; font-family: PingFangSC-Regular; font-size: 26px; line-height: 25px; background-color: #ee0507; border-radius: 15px; color: #FFFFFF;">天猫
                                </div>
                            </div>
                        </div>
                        <div style="margin: 0 35px 30px 35px; height: 199px; display: flex;">
                            <div style="border-radius: 18px; height: 100%; width: 199px; margin-right: 28px;">
                                <img style="border-radius: 18px; width:100%; height:100%"
                                     src="https://img.alicdn.com/imgextra/i1/2406931838/O1CN01WjXfUV1PRqWaM5Au0_!!2406931838.jpg_1152x1920Q50s50.jpg"
                                     alt=""/>
                            </div>
                            <div style="border-radius: 18px; height: 100%; width: 199px;">
                                <img style="border-radius: 18px; width:100%; height:100%"
                                     src="https://img.alicdn.com/imgextra/i4/2274338009/O1CN01vC8AkK292AdnMTgq5_!!2274338009.jpg_430x430q90.jpg"
                                     alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <ListView data={data}>
                </ListView>
            </ScrollView>
            <ScrollView tab-title="有趣的店"
                        style="-webkit-overflow-scrolling:touch;overflow:scroll;background-color:lightgreen;white-space:normal;font-size:50px">
                <ListView data={data}>
                </ListView>
            </ScrollView>
            <ScrollView tab-title="品牌新店" placeHolderText="load more" on-scrolltobottom={loadMore}
                        style="-webkit-overflow-scrolling:touch;overflow:scroll;background-color:#FFFFFF;">
                <div style="margin: 28px; width: 924px; background-color: #523b26;border-radius: 36px;">
                    <div style="width: 100%; height: 793px;  ">
                        <div style="margin-left: 35px; display: flex;">
                            <div style="width: 50%;">
                                <div style="width: 116px; height: 116px; margin-top: 33px;">
                                    <img
                                        src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3117799872,2369415256&fm=26&gp=0.jpg"
                                        alt="" style="border-radius: 50%; width: 100%; height: 100%;"/>
                                </div>
                                <div
                                    style="margin-top: 31px; width: 319px; height: 44px; font-family: PingFangSC-Medium; font-size: 46px; font-weight: normal; font-stretch: normal; line-height: 35px; letter-spacing: 0px; color: #ffffff;">
                                    极客时间旗舰店
                                </div>
                                <div
                                    style="opacity: 0.7; margin: 22px 0px; width: 233px; height: 30px; font-family: PingFangSC-Light; font-size: 32px; font-weight: normal; font-stretch: normal; line-height: 35px; letter-spacing: 0px; color: #ffffff;">
                                    科技风 行业优质
                                </div>
                            </div>
                            <div style="width: 50%;">
                                <div
                                    style="margin-top: 57px; display: flex; align-items: center; width: 440px; height: 69px; background-color: #000000; border-radius: 35px 0px 0px 35px; opacity: 0.3;">
                                    <div
                                        style="margin-left: 20px; width: 333px; height: 31px; font-family: PingFangSC-Light; font-size: 32px; font-weight: normal; font-stretch: normal; line-height: 35px; letter-spacing: 0px; color: #ffffff;">
                                        该店已被3.9万人关注啦！
                                    </div>
                                </div>
                                <div
                                    style="margin: 58px 35px 43px 0; float: right;display: flex; align-items: center;width: 160px; height: 72px; background-color:#523b2654;  border-radius: 36px;">
                                    <div
                                        style="margin-left: 25px;width: 76px; height: 37px; font-family: PingFangSC-Regular; font-size: 40px; font-weight: normal; font-stretch: normal; line-height: 35px; letter-spacing: 0px; color: #ffffff;">
                                        进店>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="margin: 35px; display: flex;">
                            <div style="width: 50%; height: 414px; margin-right: 26px;">
                                <img
                                    src="https://img.alicdn.com/imgextra/i4/1761455088/O1CN01KGXlyL1nSLiMaTtIr_!!1761455088.jpg_430x430q90.jpg"
                                    alt="" style="border-radius: 18px; width: 100%; height: 100%;"/>
                            </div>
                            <div style="width: 50%; height: 414px;">
                                <img
                                    src="https://img.alicdn.com/imgextra/i2/1761455088/O1CN01g0lV1x1nSLjsd5W81_!!1761455088.jpg_430x430q90.jpg"
                                    alt="" style="border-radius: 18px; width: 100%; height: 100%;"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="margin: 28px; width: 924px; background-color: #523b26;border-radius: 36px;">
                    <div style="width: 100%; height: 793px;  ">
                        <div style="margin-left: 35px; display: flex;">
                            <div style="width: 50%;">
                                <div style="width: 116px; height: 116px; margin-top: 33px;">
                                    <img
                                        src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3117799872,2369415256&fm=26&gp=0.jpg"
                                        alt="" style="border-radius: 50%; width: 100%; height: 100%;"/>
                                </div>
                                <div
                                    style="margin-top: 31px; width: 319px; height: 44px; font-family: PingFangSC-Medium; font-size: 46px; font-weight: normal; font-stretch: normal; line-height: 35px; letter-spacing: 0px; color: #ffffff;">
                                    极客时间旗舰店
                                </div>
                                <div
                                    style="opacity: 0.7; margin: 22px 0px; width: 233px; height: 30px; font-family: PingFangSC-Light; font-size: 32px; font-weight: normal; font-stretch: normal; line-height: 35px; letter-spacing: 0px; color: #ffffff;">
                                    科技风 行业优质
                                </div>
                            </div>
                            <div style="width: 50%;">
                                <div
                                    style="margin-top: 57px; display: flex; align-items: center; width: 440px; height: 69px; background-color: #000000; border-radius: 35px 0px 0px 35px; opacity: 0.3;">
                                    <div
                                        style="margin-left: 20px; width: 333px; height: 31px; font-family: PingFangSC-Light; font-size: 32px; font-weight: normal; font-stretch: normal; line-height: 35px; letter-spacing: 0px; color: #ffffff;">
                                        该店已被3.9万人关注啦！
                                    </div>
                                </div>
                                <div
                                    style="margin: 58px 35px 43px 0; float: right;display: flex; align-items: center;width: 160px; height: 72px; background-color:#523b2654;  border-radius: 36px;">
                                    <div
                                        style="margin-left: 25px;width: 76px; height: 37px; font-family: PingFangSC-Regular; font-size: 40px; font-weight: normal; font-stretch: normal; line-height: 35px; letter-spacing: 0px; color: #ffffff;">
                                        进店>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="margin: 35px; display: flex;">
                            <div style="width: 50%; height: 414px; margin-right: 26px;">
                                <img
                                    src="https://img.alicdn.com/imgextra/i4/1761455088/O1CN01KGXlyL1nSLiMaTtIr_!!1761455088.jpg_430x430q90.jpg"
                                    alt="" style="border-radius: 18px; width: 100%; height: 100%;"/>
                            </div>
                            <div style="width: 50%; height: 414px;">
                                <img
                                    src="https://img.alicdn.com/imgextra/i2/1761455088/O1CN01g0lV1x1nSLjsd5W81_!!1761455088.jpg_430x430q90.jpg"
                                    alt="" style="border-radius: 18px; width: 100%; height: 100%;"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="margin: 28px; width: 924px; background-color: #523b26;border-radius: 36px;">
                    <div style="width: 100%; height: 793px;  ">
                        <div style="margin-left: 35px; display: flex;">
                            <div style="width: 50%;">
                                <div style="width: 116px; height: 116px; margin-top: 33px;">
                                    <img
                                        src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3117799872,2369415256&fm=26&gp=0.jpg"
                                        alt="" style="border-radius: 50%; width: 100%; height: 100%;"/>
                                </div>
                                <div
                                    style="margin-top: 31px; width: 319px; height: 44px; font-family: PingFangSC-Medium; font-size: 46px; font-weight: normal; font-stretch: normal; line-height: 35px; letter-spacing: 0px; color: #ffffff;">
                                    极客时间旗舰店
                                </div>
                                <div
                                    style="opacity: 0.7; margin: 22px 0px; width: 233px; height: 30px; font-family: PingFangSC-Light; font-size: 32px; font-weight: normal; font-stretch: normal; line-height: 35px; letter-spacing: 0px; color: #ffffff;">
                                    科技风 行业优质
                                </div>
                            </div>
                            <div style="width: 50%;">
                                <div
                                    style="margin-top: 57px; display: flex; align-items: center; width: 440px; height: 69px; background-color: #000000; border-radius: 35px 0px 0px 35px; opacity: 0.3;">
                                    <div
                                        style="margin-left: 20px; width: 333px; height: 31px; font-family: PingFangSC-Light; font-size: 32px; font-weight: normal; font-stretch: normal; line-height: 35px; letter-spacing: 0px; color: #ffffff;">
                                        该店已被3.9万人关注啦！
                                    </div>
                                </div>
                                <div
                                    style="margin: 58px 35px 43px 0; float: right;display: flex; align-items: center;width: 160px; height: 72px; background-color:#523b2654;  border-radius: 36px;">
                                    <div
                                        style="margin-left: 25px;width: 76px; height: 37px; font-family: PingFangSC-Regular; font-size: 40px; font-weight: normal; font-stretch: normal; line-height: 35px; letter-spacing: 0px; color: #ffffff;">
                                        进店>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="margin: 35px; display: flex;">
                            <div style="width: 50%; height: 414px; margin-right: 26px;">
                                <img
                                    src="https://img.alicdn.com/imgextra/i4/1761455088/O1CN01KGXlyL1nSLiMaTtIr_!!1761455088.jpg_430x430q90.jpg"
                                    alt="" style="border-radius: 18px; width: 100%; height: 100%;"/>
                            </div>
                            <div style="width: 50%; height: 414px;">
                                <img
                                    src="https://img.alicdn.com/imgextra/i2/1761455088/O1CN01g0lV1x1nSLjsd5W81_!!1761455088.jpg_430x430q90.jpg"
                                    alt="" style="border-radius: 18px; width: 100%; height: 100%;"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="margin: 28px; width: 924px; background-color: #523b26;border-radius: 36px;">
                    <div style="width: 100%; height: 793px;  ">
                        <div style="margin-left: 35px; display: flex;">
                            <div style="width: 50%;">
                                <div style="width: 116px; height: 116px; margin-top: 33px;">
                                    <img
                                        src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3117799872,2369415256&fm=26&gp=0.jpg"
                                        alt="" style="border-radius: 50%; width: 100%; height: 100%;"/>
                                </div>
                                <div
                                    style="margin-top: 31px; width: 319px; height: 44px; font-family: PingFangSC-Medium; font-size: 46px; font-weight: normal; font-stretch: normal; line-height: 35px; letter-spacing: 0px; color: #ffffff;">
                                    极客时间旗舰店
                                </div>
                                <div
                                    style="opacity: 0.7; margin: 22px 0px; width: 233px; height: 30px; font-family: PingFangSC-Light; font-size: 32px; font-weight: normal; font-stretch: normal; line-height: 35px; letter-spacing: 0px; color: #ffffff;">
                                    科技风 行业优质
                                </div>
                            </div>
                            <div style="width: 50%;">
                                <div
                                    style="margin-top: 57px; display: flex; align-items: center; width: 440px; height: 69px; background-color: #000000; border-radius: 35px 0px 0px 35px; opacity: 0.3;">
                                    <div
                                        style="margin-left: 20px; width: 333px; height: 31px; font-family: PingFangSC-Light; font-size: 32px; font-weight: normal; font-stretch: normal; line-height: 35px; letter-spacing: 0px; color: #ffffff;">
                                        该店已被3.9万人关注啦！
                                    </div>
                                </div>
                                <div
                                    style="margin: 58px 35px 43px 0; float: right;display: flex; align-items: center;width: 160px; height: 72px; background-color:#523b2654;  border-radius: 36px;">
                                    <div
                                        style="margin-left: 25px;width: 76px; height: 37px; font-family: PingFangSC-Regular; font-size: 40px; font-weight: normal; font-stretch: normal; line-height: 35px; letter-spacing: 0px; color: #ffffff;">
                                        进店>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="margin: 35px; display: flex;">
                            <div style="width: 50%; height: 414px; margin-right: 26px;">
                                <img
                                    src="https://img.alicdn.com/imgextra/i4/1761455088/O1CN01KGXlyL1nSLiMaTtIr_!!1761455088.jpg_430x430q90.jpg"
                                    alt="" style="border-radius: 18px; width: 100%; height: 100%;"/>
                            </div>
                            <div style="width: 50%; height: 414px;">
                                <img
                                    src="https://img.alicdn.com/imgextra/i2/1761455088/O1CN01g0lV1x1nSLjsd5W81_!!1761455088.jpg_430x430q90.jpg"
                                    alt="" style="border-radius: 18px; width: 100%; height: 100%;"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="margin: 28px; width: 924px; background-color: #523b26;border-radius: 36px;">
                    <div style="width: 100%; height: 793px;  ">
                        <div style="margin-left: 35px; display: flex;">
                            <div style="width: 50%;">
                                <div style="width: 116px; height: 116px; margin-top: 33px;">
                                    <img
                                        src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3117799872,2369415256&fm=26&gp=0.jpg"
                                        alt="" style="border-radius: 50%; width: 100%; height: 100%;"/>
                                </div>
                                <div
                                    style="margin-top: 31px; width: 319px; height: 44px; font-family: PingFangSC-Medium; font-size: 46px; font-weight: normal; font-stretch: normal; line-height: 35px; letter-spacing: 0px; color: #ffffff;">
                                    极客时间旗舰店
                                </div>
                                <div
                                    style="opacity: 0.7; margin: 22px 0px; width: 233px; height: 30px; font-family: PingFangSC-Light; font-size: 32px; font-weight: normal; font-stretch: normal; line-height: 35px; letter-spacing: 0px; color: #ffffff;">
                                    科技风 行业优质
                                </div>
                            </div>
                            <div style="width: 50%;">
                                <div
                                    style="margin-top: 57px; display: flex; align-items: center; width: 440px; height: 69px; background-color: #000000; border-radius: 35px 0px 0px 35px; opacity: 0.3;">
                                    <div
                                        style="margin-left: 20px; width: 333px; height: 31px; font-family: PingFangSC-Light; font-size: 32px; font-weight: normal; font-stretch: normal; line-height: 35px; letter-spacing: 0px; color: #ffffff;">
                                        该店已被3.9万人关注啦！
                                    </div>
                                </div>
                                <div
                                    style="margin: 58px 35px 43px 0; float: right;display: flex; align-items: center;width: 160px; height: 72px; background-color:#523b2654;  border-radius: 36px;">
                                    <div
                                        style="margin-left: 25px;width: 76px; height: 37px; font-family: PingFangSC-Regular; font-size: 40px; font-weight: normal; font-stretch: normal; line-height: 35px; letter-spacing: 0px; color: #ffffff;">
                                        进店>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="margin: 35px; display: flex;">
                            <div style="width: 50%; height: 414px; margin-right: 26px;">
                                <img
                                    src="https://img.alicdn.com/imgextra/i4/1761455088/O1CN01KGXlyL1nSLiMaTtIr_!!1761455088.jpg_430x430q90.jpg"
                                    alt="" style="border-radius: 18px; width: 100%; height: 100%;"/>
                            </div>
                            <div style="width: 50%; height: 414px;">
                                <img
                                    src="https://img.alicdn.com/imgextra/i2/1761455088/O1CN01g0lV1x1nSLjsd5W81_!!1761455088.jpg_430x430q90.jpg"
                                    alt="" style="border-radius: 18px; width: 100%; height: 100%;"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="margin: 28px; width: 924px; background-color: #523b26;border-radius: 36px;">
                    <div style="width: 100%; height: 793px;  ">
                        <div style="margin-left: 35px; display: flex;">
                            <div style="width: 50%;">
                                <div style="width: 116px; height: 116px; margin-top: 33px;">
                                    <img
                                        src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3117799872,2369415256&fm=26&gp=0.jpg"
                                        alt="" style="border-radius: 50%; width: 100%; height: 100%;"/>
                                </div>
                                <div
                                    style="margin-top: 31px; width: 319px; height: 44px; font-family: PingFangSC-Medium; font-size: 46px; font-weight: normal; font-stretch: normal; line-height: 35px; letter-spacing: 0px; color: #ffffff;">
                                    极客时间旗舰店
                                </div>
                                <div
                                    style="opacity: 0.7; margin: 22px 0px; width: 233px; height: 30px; font-family: PingFangSC-Light; font-size: 32px; font-weight: normal; font-stretch: normal; line-height: 35px; letter-spacing: 0px; color: #ffffff;">
                                    科技风 行业优质
                                </div>
                            </div>
                            <div style="width: 50%;">
                                <div
                                    style="margin-top: 57px; display: flex; align-items: center; width: 440px; height: 69px; background-color: #000000; border-radius: 35px 0px 0px 35px; opacity: 0.3;">
                                    <div
                                        style="margin-left: 20px; width: 333px; height: 31px; font-family: PingFangSC-Light; font-size: 32px; font-weight: normal; font-stretch: normal; line-height: 35px; letter-spacing: 0px; color: #ffffff;">
                                        该店已被3.9万人关注啦！
                                    </div>
                                </div>
                                <div
                                    style="margin: 58px 35px 43px 0; float: right;display: flex; align-items: center;width: 160px; height: 72px; background-color:#523b2654;  border-radius: 36px;">
                                    <div
                                        style="margin-left: 25px;width: 76px; height: 37px; font-family: PingFangSC-Regular; font-size: 40px; font-weight: normal; font-stretch: normal; line-height: 35px; letter-spacing: 0px; color: #ffffff;">
                                        进店>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="margin: 35px; display: flex;">
                            <div style="width: 50%; height: 414px; margin-right: 26px;">
                                <img
                                    src="https://img.alicdn.com/imgextra/i4/1761455088/O1CN01KGXlyL1nSLiMaTtIr_!!1761455088.jpg_430x430q90.jpg"
                                    alt="" style="border-radius: 18px; width: 100%; height: 100%;"/>
                            </div>
                            <div style="width: 50%; height: 414px;">
                                <img
                                    src="https://img.alicdn.com/imgextra/i2/1761455088/O1CN01g0lV1x1nSLjsd5W81_!!1761455088.jpg_430x430q90.jpg"
                                    alt="" style="border-radius: 18px; width: 100%; height: 100%;"/>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollView>
        </TabView>
    </div>;

    // let c = tree;
    // c = <div>
    //     <span class="x">000</span>
    //     <br/><br/>
    //     <ListView data={[{abc: 123 * 123}]}></ListView>
    // </div>;
    c.appendTo(document.body);
};

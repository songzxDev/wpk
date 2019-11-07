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
    let c = <TabView style="width:100%;height:100%;">
        <ScrollView tab-title="推荐" placeHolderText="load more" on-scrolltobottom={loadMore}
                    style="-webkit-overflow-scrolling:touch;overflow:scroll;background-color:lightblue;white-space:normal;font-size:50px">
            <Carousel
                style="margin: 28px; height: 492px; width: 924px;; overflow: hidden; white-space: nowrap;"
                pictures={pictures}>
            </Carousel>
            <div style="margin: 69px 34px 40px; height: 43px; font-family: PingFangSC-Medium; font-size: 46px; font-weight: normal; font-stretch: normal; line-height: 35px; letter-spacing: 0px; color: #333333;">
                超多人气收藏的店
            </div>
            <div style="margin: 0 28px 35px; display: flex; width: 924px;">
                <div style="height: 361px; width: 450px; margin-right: 24px; border-radius: 18px; background-color: #fefefe;">
                    <div style="margin: 27px 35px; display: flex;">
                        <div style="width: 78px; height: 78px;"></div>
                        <div style=" height: 78px; display: flex; flex-flow: column;">
                            <div style="margin-left: 18px; height: 34px; font-family: PingFangSC-Regular; font-size: 36px; font-weight: normal; font-stretch: normal; line-height: 35px; letter-spacing: 0px; color: #333333;">
                                极客时间旗舰店
                            </div>
                            <div style="margin:18px 0 0 18px; width: 63px; height: 30px; font-family: PingFangSC-Regular; font-size: 26px; line-height: 25px; background-color: #ee0507; border-radius: 15px; color: #FFFFFF;">天猫</div>
                        </div>
                    </div>
                    <div style="margin: 0 35px 30px 35px; height: 199px; display: flex;">
                        <div style="border-radius: 18px; height: 100%; width: 199px; margin-right: 28px;">
                            <img style="border-radius: 18px; width:100%; height:100%" src="https://img.alicdn.com/imgextra/i1/3954877919/O1CN01pQ18Jj28MwxyqWBXe_!!3954877919.jpg_430x430q90.jpg" alt=""/>
                        </div>
                        <div style="border-radius: 18px; height: 100%; width: 199px;">
                            <img style="border-radius: 18px; width:100%; height:100%" src="https://img.alicdn.com/imgextra/i3/2191160435/TB19WqyqASWBuNjSszdXXbeSpXa_!!0-item_pic.jpg_430x430q90.jpg" alt=""/>
                        </div>
                    </div>
                </div>
                <div style="height: 361px; width: 450px; border-radius: 18px; background-color: #fefefe;">
                    <div style="margin: 27px 35px; display: flex;">
                        <div style="width: 78px; height: 78px;"></div>
                        <div style=" height: 78px; display: flex; flex-flow: column;">
                            <div style="margin-left: 18px; height: 34px; font-family: PingFangSC-Regular; font-size: 36px; font-weight: normal; font-stretch: normal; line-height: 35px; letter-spacing: 0px; color: #333333;">
                                当当旗舰店
                            </div>
                            <div style="margin:18px 0 0 18px; width: 63px; height: 30px; font-family: PingFangSC-Regular; font-size: 26px; line-height: 25px; background-color: #ee0507; border-radius: 15px; color: #FFFFFF;">天猫</div>
                        </div>
                    </div>
                    <div style="margin: 0 35px 30px 35px; height: 199px; display: flex;">
                        <div style="border-radius: 18px; height: 100%; width: 199px; margin-right: 28px;">
                            <img style="border-radius: 18px; width:100%; height:100%" src="https://img.alicdn.com/imgextra/i1/2406931838/O1CN01WjXfUV1PRqWaM5Au0_!!2406931838.jpg_1152x1920Q50s50.jpg" alt=""/>
                        </div>
                        <div style="border-radius: 18px; height: 100%; width: 199px;">
                            <img style="border-radius: 18px; width:100%; height:100%" src="https://img.alicdn.com/imgextra/i4/2274338009/O1CN01vC8AkK292AdnMTgq5_!!2274338009.jpg_430x430q90.jpg" alt=""/>
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
        <ScrollView tab-title="品牌新店" style="background-color:pink;font-size:50px">
            <ListView data={data}></ListView>
        </ScrollView>
    </TabView>;

    // let c = tree;
    // c = <div>
    //     <span class="x">000</span>
    //     <br/><br/>
    //     <ListView data={[{abc: 123 * 123}]}></ListView>
    // </div>;
    c.appendTo(document.body);
};

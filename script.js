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
            <ListView data={data}>


            </ListView>
        </ScrollView>
        <ScrollView tab-title="有趣的店"
                    style="-webkit-overflow-scrolling:touch;overflow:scroll;background-color:lightgreen;white-space:normal;font-size:50px">
            dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf dbf
            dbf dbf dbf dbf dbf dbf
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

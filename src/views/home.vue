<template>
	<nv-head  :show-menu.sync="showMenu" :page-type="searchKey.tab | getTitleStr" fix-head="true" :need-add="true">
   </nv-head>
	<section id="page">
		<!-- 首页列表 -->
		<ul class="item-list">
			<li class="room-item" v-for="item in topics"
				   >
			  <ol class="room-list">
				<li class="item-img">
				  <img :src="item.image_url" >
				  <span class="price">￥<i class="money">{{item.price}}</i></span>
				</li>
				<li class="roomName">
					<h4 v-text="item.title">{{item.title}}</h4>
					 <span class="state" :class="{'over':!item.state}" >{{item.state?"购买":"预订"}}</span>
				</li>
				<li class="icon-tips">
				</li>
				<li class="roomInfo">
					 <span>{{item.roomnum}}室{{item.bashnum}}卫 ·</span>
					 <span>宜住<i>{{item.peoplenum}}</i>人</span>
				</li>
			  </ol>
			</li>
		</ul>
	</section>
	<nv-top></nv-top>
</template>


<script>
	export default {
		data (){
			return {
				showMenu: false,
				scroll:true,
				topics:[{id:'l1',price:100,title:'榻榻米',state:true,roomnum:1,bashnum:1,peoplenum:2,image_url:'http://localhost:3000/image/watermelon.jpg'},{id:'l2',price:100,title:'榻榻米',state:false,roomnum:1,bashnum:1,peoplenum:2,image_url:'http://localhost:3000/image/pawpaw.jpg'},{id:'l3',price:100,title:'榻榻米',state:true,roomnum:1,bashnum:1,peoplenum:2,image_url:'http://localhost:3000/image/orange.jpg'},{id:'l4',price:100,title:'榻榻米',state:true,roomnum:1,bashnum:1,peoplenum:2,image_url:'http://localhost:3000/image/mp1.jpg'},{id:'l5',price:100,title:'榻榻米',state:true,roomnum:1,bashnum:1,peoplenum:2,image_url:'http://localhost:3000/image/mp2.jpg'},{id:'l6',price:100,title:'榻榻米',state:true,roomnum:1,bashnum:1,peoplenum:2,image_url:'http://localhost:3000/image/mp3.jpg'}],
				searchKey:{
					page:1,
					limit:20,
					tab:'all',
					mdrender:true
				},
				searchDataStr:''
			}
		},
		route:{
			data(transition){
			   // let query = transition.to.query,tab = query.tab || 'all';
			   // this.showMenu = false;

				//滚动加载
				$(window).on('scroll', () => {
					this.getScrollData();
				});

			},
			deactivate (transition){
				$(window).off('scroll');
			 
				transition.next();
			}
		},
		methods:{
			getTopics (searchKey){
 
			},
			//滚动加载数据
			getScrollData (){
				if(this.scroll){
					let totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());
					if ($(document).height() <= totalheight + 200) {
						this.scroll = false;
						this.searchKey.limit += 20;
						this.getTopics();
					}
				}
			}
		},
		components:{
			"nvHead":require('../components/header.vue'),
			"nvTop":require('../components/backtotop.vue')
		}
	}
</script>
<style type="text/css">
		.room-item{
    padding: 0 0 .1rem 0;
    margin-bottom: 0;
    background-color: #fff;
    color: #212121;
    font-size: .14rem;  
    background-image: linear-gradient(#eee,#eee);
    background-size: 100% 1px;
    background-repeat: no-repeat;
    background-position: bottom;

}

.item-img
{
    position: relative;
    padding: 0!important;
  /*  border-top: 1px solid #ccc;*/	
    border-bottom: 1px solid #ccc;
    background: url(http://source.qunarzz.com/apt_q_web/list/roomBgIcon.png) center center no-repeat;
    background-size: 30%;
        line-height: 0;

}

.item-img img
{
    height: 212px;
    width: 100%;
    padding: .05rem;

}

.item-img .price{
    color: #fff;
    position: absolute;
    background-color: rgba(0,0,0,0.6);
    font-family: "arial";
    border-radius: 0;
    -webkit-background-clip: padding-box!important;
    background-clip: padding-box!important;
    padding: .1rem;
    height: .4rem;
    bottom: .15rem;
    left: 0;

}
.item-img .price .money {
       font-size: .2rem;
    line-height: .2rem;
    font-style: normal;
}
.item-list>li{
    background-color: #fff;
    color: #212121;
    font-size: .14rem;
    background-image: -webkit-linear-gradient#eee,#eee;
    background-image: linear-gradient(#eee,#eee);
    -webkit-background-size: 100% 1px;
    background-size: 100% 1px;
    background-repeat: no-repeat;
    background-position: bottom;
    float: left;
    width: 45%;
    margin: 0.08rem;
    border-radius: 5px;
}
   /* padding: .11rem;*/

.item-list>.room-item li {
    padding: 0 .15rem;
}
.item-list .roomName{
    overflow: hidden;
}

.item-list .roomName h4 {
     color: #333;
    font-size: .18rem;
    padding: .1rem 0 .05rem;
    font-weight: normal;
    width: 70%;
    float: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.item-list .roomName .state {
    float: right;
    margin-top: .1rem;
    border: .01rem solid #54c963;
    width: .35rem;
    display: block;
    height: .3rem;
    text-align: center;
    line-height: .3rem;
    color: #54c963;
    border-radius: .03rem;
}
.item-list .roomName .over {
  
    border-color: #F00;
    color: #f00;
}

.item-list  .icon-tips {
    padding-bottom: .05rem;
}
.item-list  .roomInfo {
    color: #666;
    font-size: .12rem;
}





</style>
<!-- 右边组件 -->
<template>
  <div class="content">
    <h2>功能模块</h2>
    <ul class="clearfix">
      <li class="flag clearfix">
        <a href="javascript:void(0);" class="figure flag-item">
          <img src="../../assets/images/grayscale.png" alt=""></a>
          <div class="right">
            <div class="figcaption flag-item"></div>
            <div class="flag-title"><a href="javascript:void(0);">平台管理员</a></div>
            <div class="flag-price">
              <span>当期管理</span>
              <span>订单查看</span>
              <span>钱包账户</span>
            </div>
            <div class="flag-type"></div>
            <a class="flag-btn" href="javascript:void(0);"></a>
          </div></li>
          <li class="flag">
            <a href="javascript:void(0);" class="figure flag-item">
              <img src="../../assets/images/grayscale.png" alt=""></a>
              <div>
                <div class="figcaption flag-item"></div>
                <div class="flag-title"><a href="javascript:void(0);">内容录入员</a></div>
                <div class="flag-price">
                  <span>当期管理</span>
                  <span>订单查看</span>
                  <span>钱包账户</span>
                </div>
                <div class="flag-type"></div>
                <a class="flag-btn" href="javascript:void(0);"></a>
              </div></li>
              <li class="flag">
                <a href="javascript:void(0);" class="figure flag-item">
                  <img src="../../assets/images/grayscale.png" alt=""></a>
                  <div>
                    <div class="figcaption flag-item"></div>
                    <div class="flag-title"><a href="javascript:void(0);">婚礼管家</a></div>
                    <div class="flag-price">
                      <span>当期管理</span>
                      <span>订单查看</span>
                      <span>钱包账户</span>
                    </div>
                    <div class="flag-type"></div>
                    <a class="flag-btn" href="javascript:void(0);"></a>
                  </div></li>
                  <li class="flag">
                    <a href="javascript:void(0);" class="figure flag-item">
                      <img src="../../assets/images/grayscale.png" alt=""></a>
                      <div>
                        <div class="figcaption flag-item"></div>
                        <div class="flag-title"><a href="javascript:void(0);">平台财务</a></div>
                        <div class="flag-price">
                          <span>当期管理</span>
                          <span>订单查看</span>
                          <span>钱包账户</span>
                        </div>
                        <div class="flag-type"></div>
                        <a class="flag-btn" href="javascript:void(0);"></a>
                      </div></li>
                      <li class="flag">
                        <a href="javascript:void(0);" class="figure flag-item">
                          <img src="../../assets/images/grayscale.png" alt=""></a>
                          <div>
                            <div class="figcaption flag-item"></div>
                            <div class="flag-title"><a href="javascript:void(0);">平台运营角色</a></div>
                            <div class="flag-price">
                              <span>当期管理</span>
                              <span>订单查看</span>
                              <span>钱包账户</span>
                            </div>
                            <div class="flag-type"></div>
                            <a class="flag-btn" href="javascript:void(0);"></a>
                          </div></li>
                          <li class="flag">
                            <a href="javascript:void(0);" class="figure flag-item">
                              <img src="../../assets/images/grayscale.png" alt=""></a>
                              <div>
                                <div class="figcaption flag-item"></div>
                                <div class="flag-title"><a href="javascript:void(0);">供应商</a></div>
                                <div class="flag-price">
                                  <span>当期管理</span>
                                  <span>订单查看</span>
                                  <span>钱包账户</span>
                                </div>
                                <div class="flag-type"></div>
                                <a class="flag-btn" href="javascript:void(0);"></a>
                              </div></li>
                              <li class="flag">
                                <a href="javascript:void(0);" class="figure flag-item">
                                  <img src="../../assets/images/grayscale.png" alt=""></a>
                                  <div>
                                    <div class="figcaption flag-item"></div>
                                    <div class="flag-title"><a href="javascript:void(0);">平台管理</a></div>
                                    <div class="flag-price">
                                      <span>当期管理</span>
                                      <span>订单查看</span>
                                      <span>钱包账户</span>
                                    </div>
                                    <div class="flag-type"></div>
                                    <a class="flag-btn" href="javascript:void(0);"></a>
                                  </div></li>
                                </ul>
                              </div>
                            </template>
                            <script>
                              export default {
                                data () {
                                  return {
                                  }
                                }
                              }
                            </script>
                            <style scoped>
                              .content {
                                margin-right: 350px;
                              }
                              .content h2 {
                                margin: 0;
                                padding: 0;
                                font-size: 16px;
                                color: #333;
                                height: 24px;
                                line-height: 24px;
                                margin-left: 47px;
                              }
                              .content ul {
                                margin: 0;
                                padding: 0;
                                list-style: none;
                              }
                              .content .right {
                                margin-left: 103px;
                              }
                              .flag {
                                width: 311px;
                                height: 121px;
                                background-color: #fff;
                                float: left;
                                /* margin-left: 11px; */
                                background-color: #00f;

                              }
                              .flag .flag-item.figure {
                                display: block;
                                width: 56px;
                                height: 56px;
                                padding-top: 32px;
                                padding-bottom: 33px;
                              }
                              .flag .flag-item {
                                background-color: #fff;
                              }
                              .flag .flag-item img {
                                width: 56px;
                                height: 56px;
                                /* margin-left: 21px; */

                              }

                              .flag .flag-item.figcaption {
                                position: relative;
                                float: left;
                              }
                              .flag .flag-title a {
                                color: #333;
                                line-height: 20px;
                                overflow: hidden;
                                -webkit-line-clamp: 2;
                                line-clamp: 2;
                                -webkit-box-orient: vertical;
                                box-orient: vertical;
                                display: -webkit-box;
                                display: box;
                                /* display: block; */


                              }
                            </style>

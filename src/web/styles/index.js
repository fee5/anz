import container from './container'

import { breakpoints } from './variables'

export default `
${container}

* {
  box-sizing: border-box;
}
.navbar__ {
  background: #00C6D7;
  clear: both;
}

.navbar__ a {
  display: block;
  height: 50px;
  padding: 0 20px;
  line-height: 50px;
  float: left;
}

.navbar-dropdown {
  position: relative;
}

.navbar-dropdown div {
  position: absolute;
  backgroud-color: #fff;
  top: 100%;
}

.home-coin-ctn {
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 4px;
  color: #888;
}

.home-coin-ctn div {
  text-align: center;
  font-size: 36px;
  color: #CCAC00;
}

.home-dash-board {
  float: none;
  margin: 0;
}

.home-dash-board li {
  display: block;
  float: none;
  border: 1px solid #ddd;
  margin-top: 10px;
  width: 100%;
  height: 60px;
  line-height: 60px;
  border-radius: 4px;
}

.home-dash-board li a {
  font-size: 16px;
  display: block;
  padding: 0 15px;
  text-align: center;
  height: 60px;
  line-height: 60px;
}



.cf:before,
.cf:after {
    content: " ";
    display: table;
}

.cf:after {
    clear: both;
}

.fl {
  float: left;
}

.fr {
  float: right;
}

.border-bottom {
  border-bottom: 1px solid #dddddd;
}

.player-recharge-item {
  margin-bottom: 8px;
  padding: 5px 0;
}

.text-hint {
  color: #999;
  font-size: 12px;
}


.recharge-button-ctn {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}

.recharge-button-ctn {
  background-color: #f2f2f2;
}

.recharge-button-ctn button {
  font-size: 20px;
  display: block;
  width: 100%;
  border-radius: 0;
  height: 50px;
}

.modal-header .close {
  font-size: 30px;
  color: #000000;
}

.right-menu-icon {
  font-size: 36px;
}

.detail-table td {
  padding: 5px 0;
}

.detail-table td:first-child {
  color: #999;
}

.form-login {
  margin-top: 100px;
  
  background-color: #049DBC;
  background-repeat: repeat-x;

  /* Safari 4-5, Chrome 1-9 */
  background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#049DBC), to(#6AC6DB));

  /* Safari 5.1, Chrome 10+ */
  background: -webkit-linear-gradient(top, #049DBC, #6AC6DB);

  /* Firefox 3.6+ */
  background: -moz-linear-gradient(top, #049DBC, #6AC6DB);

  /* IE 10 */
  background: -ms-linear-gradient(top, #049DBC, #6AC6DB);

  /* Opera 11.10+ */
  background: -o-linear-gradient(top, #049DBC, #6AC6DB);
  
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 80px;
  color: #fff;
  font-size: 14px;
}

.form-login label {
  font-weight: 700;
}
  
.form-login input {
  display: block;
  margin: 5px 0 15px 0;
  width: 100%;
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid #049DBC;
}

.form-login button {
  border-radius: 4px;
  border: 1px solid #049DBC;
  padding: 5px 10px;
  margin-top: 20px;
  cursor: pointer;
}

.home-content {
  margin-top: 30px;
  position: relative;
  color: #99D9EA;
  padding-left: 120px;
}

.home-content-select {
  left: 0;
  position: absolute;
}

.home-content-table th {
  text-align: left;
  white-space: nowrap
}

.home-content {
  max-width: 100%;
  overflow-x: auto;
}

.home-content-table td {
  padding: 5px 0;
}

.home-content-select select {
  background-color: #00C6D7;
  border: none;
  padding: 5px;
}

.home-content-select option {
  background-color: #fff;
}

@media (max-width: ${breakpoints.sm}px) {
  .home-content {
    padding-left: 0;
  }
  
  .home-content-select {
    position: static;
    margin-bottom: 10px;
  }
}

.ta-center {
  text-align: center;
}

.chart-ctn > div {
  float: left;
}

.color-label-span {
  width: 10px;
  height: 10px;
  display: inline-block;
  margin-right: 3px;
}

.pie-info > span {
  margin-right: 10px;
}
.breadcrumbs {
  background-color: #00C6D7;
}

.breadcrumbs .ctn {
  padding: 5px 0 20px 35px;
  font-weight: 700;
}
`

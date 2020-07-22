<template>
  <div class="container">
      <div class="header">
          <div class="header-bg">
              <img src="@/assets/headerBG.jpg"/>
          </div>
      </div>
      <div class="main">Main</div>
      <div class="footer">Footer</div>
  </div>
</template>

<style>
.header .header-bg img{
    height: 300px;
    width: 100%;
}
.container{
  background-color:burlywood;
}
.header,.footer {
  border: black 1px solid;
}

.main {
  border: black 1px solid;
}
</style>
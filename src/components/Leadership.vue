<template>
    <div class="main-content-container">
        <div class="row">
            <div class="col-sm-6">
                <div v-for="(section, key) in sections" :key="key" class="row mb-5">
                        <h3>{{section.heading}}<small class="date">{{section.date}}</small></h3>
                        <p>{{section.text}}</p>
                        <p>{{section.linkText}}: <a :href="section.link" target="_blank">{{section.link}}</a></p>
                </div>
            </div>
            <div class="col-sm-6">
                <img src="@/assets/Leadership/LeadershipMainImage.png" style="width: 80vh;">
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'leadership',
  data: function() {
      return {
          sections: [
              {
                  heading: "Co Space House Manager",
                  date: "Summer 2017-Summer 2018",
                  text: "I spent a year managing a house filled with 20 incredible honors students, graduate students, and young professionals. I was responsible for managing monthly pitch dinners, weekly house meetings, cleaning blitz, family dinners, retreats, house maintenance, guest dinners and any events the members of the house wanted to put together. There is a lot of work involved in keeping a big house functional, especially when you are in grad school, but I had a lot of fun doing it and I wouldn’t trade my Co Space experience for anything.",
                  linkText: "You can find me on the Co Space website in class of 2018",
                  link: "http://thecospace.com/people/"
              }
          ]
      }
  }
}
</script>

<style scoped>
    hr {
        width: 100%; 
        color: black; 
        height: 1px; 
        background-color:black;
    }
    
    .tile {
        background-color: #D3D3D3;
        height: 100%;  
        min-height: 15vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

</style>

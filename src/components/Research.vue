<template>
    <div class="main-content-container">
        <div class="row">
            <div class="col-sm-6">
                <div v-for="(section, key) in sections" :key="key" class="row mb-5">
                    <h4 style="margin-right: 200px;">{{section.heading}}</h4>
                    <div v-if="section.text">
                        <p>{{section.text}}</p>
                    </div>
                    <div v-if="section.videoText">
                        <p>{{section.videoText}}</p>
                    </div>
                    <div v-if="section.linkText">
                        <p>{{section.linkText}} <a :href="section.link" target="_blank">{{section.link}}</a></p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <iframe src="https://www.youtube.com/embed/1Oqb0TOvV7k" style="width: 80vh; height: 40vh; margin-bottom: 100px;" allowfullscreen></iframe>
                <img src="@/assets/Research/Workflow.png" style="width: 80vh;">
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'research',
  data: function() {
      return {
          sections: [
              {
                  heading: "Thesis Research Spring",
                  text: "For the past two years I have been conducting research on how virtual reality may be used to further STEM education, with a focus on additive manufacturing. Through this research I learned more about various modeling and gaming software, virtual reality, design for additive manufacturing, design of experiments, running and controlling experiments with human subjects, quantitative and qualitative data analysis, and the conventions of writing for a conference or journal."
              },
              {
                  heading: "Summer 2017",
                  videoText: "Presented my VR-3D printer demo at Rapid+TCT, a video of the gameplay can be seen here:",
                  linkText: "Inspired an open source web-based VR-3D Printer designed by Aleph Objects. Credit shown here:",
                  video: "https://www.youtube.com/embed/1Oqb0TOvV7k",
                  link: "https://www.lulzbot.com/learn/tutorials/experience-virtual-reality-3d-printing"
              },
              {
                  heading: "Fall 2017-Spring 2018",
                  text: "Ran an experiment involving over 100 first year engineering students. The experiment aimed to explore VR has on Additive Manufacturing Education."
              },
              {
                  heading: "Summer 2018",
                  linkText: "Presented my work at IDETC in Quebec City. My published work can be seen here:",
                  downloadText: "If you would like to read it you may download my 2018 IDETC paper for free here",
                  link: "https://proceedings.asmedigitalcollection.asme.org/proceeding.aspx?articleID=2713334"
              },
              {
                  heading: "Fall 2018",
                  text: "Ran an experiment involving a small group of students experienced in additive manufacturing. The experiment aims to evaluate the effect that different types of virtual reality might have on design decision making in additive manufacturing."
              },
              {
                  heading: "Spring 2018",
                  text: "Submitting new research to IDETC 2019."
              }
          ]
      }
  }
}
</script>

<style scoped>
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

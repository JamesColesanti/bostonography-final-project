import './App.css';
import EmissionsChart from './charts/EmissionsChart';
import EnergyUsageChart from './charts/EnergyUsageChart';

function App() {
  return (
    <div>
      <h1>
        Boston Wasn't Built in a Day: Analyzing Emissions of the City's Buildings
      </h1>
      <div>
        <h2>
          Emissions Chart
        </h2>
      </div>
      <EmissionsChart />
      <div>
        <h2>
          Energy Usage Chart
        </h2>
      </div>
      <EnergyUsageChart />
      <div>
        <p>
          The above charts provide a visualization of data pulled from the
          <a href='https://data.boston.gov/dataset/building-energy-reporting-and-disclosure-ordinance/resource/a7b155de-10ee-48fc-bd89-fc8e31134913'> 
            Building Energy Reporting and Disclosure Ordinance (BERDO) - 2021 Reported Energy and Water Metrics - Analyze Boston. 
          </a>
          On the y-axis, there are years corresponding to when buildings in Boston were constructed. In the first chart, the line represents the average 
          GHG emissions (in MTCO2e) of Boston buildings in 2021. The buildings are grouped by when they were built. For example, the dot above 
          "1900-1909" represents the average GHG emissions in 2021 for all buildings in the data set that were built between the years 1900 and 1909. 
          In the second chart, the buildings are grouped the same way. The only difference is that the line represents the average energy per square 
          foot of the buildings in each group (in kBTU). 
        </p>
        <p>
          This visualization was made to analyze the claim that the average GHG emissions of Boston buildings in 2021 was higher for buildings constructed before 1970, 
          which was when the Environmental Protection Agency (EPA) was created. For buildings constructed after that year, the average was below this peak. This claim was made prior to any 
          data being analyzed, and was mainly a hypothesis based on research about the foundation of the EPA. 
        </p>
        <p>
          As we can see in the charts, this claim is not supported by the data. In the GHG emissions chart, the peak can be found in the data point for 
          the years between 2000 and 2009. There is a sharp 
          increase after 1999, which contradicts the claim that GHG emissions did not rise past the level they were at when the EPA was founded in 1970.
        </p>
        <p>
          We can look at U.S. history, and Boston history specifically, to help understand the data we see in the visualization. For example, we can start with 
          the peak in 1910-1919. This can best be explained by the growth of the city following the industrial revolution. During this time, Boston changed drastically 
          as a large influx of immigrants caused the population to skyrocket. Additionally, this time period was roughly 10 years after the creation of the "T", Boston's 
          subway system. These factors likely contributed to the construction of many buildings in a short period of time. Given that the new technology from the 
          industrial revolution, such as the steam engine, was not regulated as strictly as it would later be, it would make sense that buildings constructed during 
          this time did not place much emphasis on energy efficiency/emissions. As a result, we see the large spike in the emissions chart. High energy usage later on in 2021 
          caused large amounts of GHG emissions.
        </p>
        <p>
          There is a large drop-off in the production of emissions in buildings constructed in the years following this peak. This is likely due to the decreasing 
          pace at which new buildings were made. The population grew less during this time, which meant construction slowed down considerably. Buildings that were 
          constructed during this time were probably more selective, which gave architects and engineers greater flexibility when considering GHG emissions. 
          Awareness of the environmental impacts of the industrial revolution likely grew as well, which may have impacted building design decisions.
        </p>
        <p>
          For the next couple of decades, the GHG emissions data does not vary much. It rises and falls by a trivial amount. Even around 1970, we do not see much 
          variation. There is a slight drop-off in the two decades following this one, which was when the EPA was founded. This could provide some evidence that 
          the EPA was effective in promoting building regulations during this time. The EPA made notable progress in passing legislation relating to GHG emissions 
          in the 1970s, including amendments to the Clean Air Act. This was a law that had been in place since 1963, although the 1970 amendments greatly improved 
          its impact. The updated law gave the EPA the power to enforce National Ambient Air Quality Standards (NAAQS). This applied to buildings, which likely led 
          to much safer practices during construction in the years that followed. 
        </p>
        <p>
          Likely the most shocking data point in the emissions chart is the sharp increase in emissions for buildings constructed between 2000 and 2009. This is 
          slightly disheartening to see, as it indicates that the EPA's policies were not successful in having a lasting impact on improving the way buildings were 
          made in Boston. The spike was likely due to the explosion of the internet during these years. Buildings were constructed with the popularity of the internet 
          in mind, which meant greater capacity for energy usage. In the energy usage chart, we can see that these buildings used much more energy than buildings 
          that were constructed in years prior. Based on this data, it seems that the spike in emissions may have been unavoidable given the advance in technology at 
          the time.
        </p>
        <p>
          It is also important to note that President George W. Bush's EPA did very little to regulate GHG emissions, which likely contributed to this peak in the chart as well. 
          The state of Massachusetts actually sued the EPA during this time due to their inaction on this issue. In 2007, the Supreme Court ruled in favor of 
          Massachusetts, requiring the EPA to regulate emissions in order to properly follow the Clean Air Act mentioned before. This shows that Massachusetts' legislators 
          were in favor of strict regulation, which likely contributed to the decrease in emissions for buildings constructed shortly after this lawsuit took place.
        </p>
        <p>
          The sharp decrease that follows this peak also makes sense given President Barack Obama's administration from 2008-2016. Obama is widely regarded as one of the EPA's 
          most supportive presidents, as he made several efforts to strengthen the EPA's regulatory power. This included over 4000 regulations being issued over the course
          of his administration, many of which focused on reducing GHG emissions. Under Obama, the EPA went back to strongly 
          regulating emissions as it had done before the Bush administration. This, along with Massachusetts' legislators desire to decrease emissions, likely led to the decrease we see in the chart for 
          buildings constructed in the years after 2010.
        </p>
        <p>
          Overall, this data visualization provides a unique perspective on the state of GHG emissions in Boston over the past 100 years. Although it disproves our 
          initial claim, it still provides some insight into the impact the EPA had on the construction of buildings in Boston. The peaks in the emissions chart correspond
          to periods of rapid expansion and little regulation, while the lows correspond to strong EPA and government action. Thus, the visualization helps us
          understand the impact of the EPA on building construction wthin Boston, which was the initial goal of the project.
        </p>
      </div>
      <div>
        <span>
          <a href='https://github.com/JamesColesanti/bostonography-final-project/blob/master/public/bos-final-project-works-cited.pdf'>Works Cited</a>
        </span>
      </div>
    </div>
  );
}

export default App;

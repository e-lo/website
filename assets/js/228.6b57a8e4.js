(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{428:function(e,t,a){"use strict";a.r(t);var o=a(7),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("The Federal Transit Administration's Simplified Trips-on-Project Software (STOPS) was released in September 2013. The latest version is 1.50, which was released May 6, 2015. It is a limited implementation of the conventional “4-step” travel model"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn1",id:"fnref1"}},[e._v("[1]")])]),e._v(". Official STOPS information from FTA can be found "),a("a",{attrs:{href:"http://www.fta.dot.gov/grants/15682.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("FTA developed STOPS to provide a forecasting tool to potential project sponsors of Capital Investment Grant applications. STOPS is one of three approaches that can be selected by project sponsors. Region-wide travel models and incremental data-driven methods are the other two approaches.")]),e._v(" "),a("p",[e._v("STOPS can be downloaded from FTA’s STOPS page. This page also contains the STOPS user guide and an example application.")]),e._v(" "),a("h2",{attrs:{id:"inputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[e._v("#")]),e._v(" Inputs")]),e._v(" "),a("p",[e._v("STOPS uses pre-existing data files for nearly all aspects of the forecasting process. The data can be readily obtained from various agencies like FTA, local transit agencies, local MPOs and project sponsors.")]),e._v(" "),a("p",[e._v('![STOPS User Interface](STOPS User Interface.jpg "STOPS User Interface")')]),e._v(" "),a("h4",{attrs:{id:"census-and-ctpp-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#census-and-ctpp-data"}},[e._v("#")]),e._v(" Census and CTPP Data")]),e._v(" "),a("p",[e._v("STOPS uses the year 2000 Census and CTPP data as one of the inputs. The following data is required by STOPS for each state in the corridor being modeled.")]),e._v(" "),a("ol",[a("li",[e._v("GIS shape file describing the boundaries of the census geography used in the CTPP input files")]),e._v(" "),a("li",[e._v("CTPP Part I file (workers by residence location)")]),e._v(" "),a("li",[e._v("CTPP Part II file (workers by employment location)")]),e._v(" "),a("li",[e._v("CTPP Part III file (journey-to-work flows)")]),e._v(" "),a("li",[e._v("Census Block boundary shape file")])]),e._v(" "),a("p",[e._v("This data can be downloaded from "),a("a",{attrs:{href:"http://www.fta.dot.gov/grants/15682_15621.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"metropolitan-planning-organization-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metropolitan-planning-organization-data"}},[e._v("#")]),e._v(" Metropolitan Planning Organization Data")]),e._v(" "),a("p",[e._v("STOPS requires the following data from the MPOs.")]),e._v(" "),a("ol",[a("li",[e._v("MPO zone layer with the year 2000 and the current year population and employment for each zone.")]),e._v(" "),a("li",[e._v("Zone to zone current year peak period automobile travel times and distances. This can be obtained from the regional travel demand forecasting model.")])]),e._v(" "),a("p",[e._v("Also, in order to develop any future year forecasts, the future year population and employment should be added in the MPO zone layer. The zone to zone automobile travel times and distances for the future year should also be added to represent future year congestion.")]),e._v(" "),a("h4",{attrs:{id:"transit-networks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transit-networks"}},[e._v("#")]),e._v(" Transit Networks")]),e._v(" "),a("p",[e._v("STOPS uses a recent advance in online schedule data - General Transit Feed Specification (GTFS) to represent transit supply, instead of the traditional time-consuming approach of manually coding the transit networks. This data format defines the public transportation schedules and associated geographic information. This format is used in "),a("a",{attrs:{href:"https://maps.google.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google maps"),a("OutboundLink")],1),e._v(" to find the shortest public transit path for a given trip. The full documentation of GTFS can be obtained from "),a("a",{attrs:{href:"https://developers.google.com/transit/gtfs/reference",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("GTFS data is publicly available for most transit agencies. It can be downloaded from "),a("a",{attrs:{href:"http://code.google.com/p/googletransitdatafeed/wiki/PublicFeeds",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(". In some cases, the data has to be requested from the local transit agency.")]),e._v(" "),a("p",[e._v('STOPS also provides some extensions to edit GTFS files. For example, coding a new fixed guideway line, rerouting buses to serve the stations, providing park-and-ride access opportunities etc are some of the tasks that can be accomplished by using these extensions. GTFS files are extremely complex and care must be taken while editing these files. The Google developers website includes two tools which can be used to verify and to visualize a GTFS feed. The file containing these tools can be obtained by downloading the most recent version of "Prebuilt Windows versions of FeedValidator, ScheduleViewer, and other tools" from '),a("a",{attrs:{href:"http://code.google.com/p/googletransitdatafeed/downloads/list",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"station-locations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#station-locations"}},[e._v("#")]),e._v(" Station Locations")]),e._v(" "),a("p",[e._v("STOPS includes a file containing the existing station locations across the United States. The locations and characteristics of new stations on the project can be added to this file by using GIS tools.")]),e._v(" "),a("h4",{attrs:{id:"district-definition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#district-definition"}},[e._v("#")]),e._v(" District Definition")]),e._v(" "),a("p",[e._v("STOPS uses districts to define a logical grouping of zones for two purposes.")]),e._v(" "),a("ol",[a("li",[e._v("Growth factoring of the 2000 CTPP trips to estimate forecast year trips using MPO population and employment forecasts.")]),e._v(" "),a("li",[e._v("Summarizing and mapping of STOPS forecasts.")])]),e._v(" "),a("p",[e._v("This is a manual step in STOPS and the districts need to be appropriately defined by grouping zones along the station locations of the project and other existing fixed guideway lines. The definition of these districts is a very crucial part of the ridership forecasting process in STOPS.")]),e._v(" "),a("h2",{attrs:{id:"calibration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#calibration"}},[e._v("#")]),e._v(" Calibration")]),e._v(" "),a("p",[e._v("STOPS is a nationally calibrated model. Actual fixed guideway ridership in six metropolitan areas was used for calibration and it was validated against station specific counts in nine other metropolitan areas with a fixed guideway system.")]),e._v(" "),a("p",[e._v("STOPS also provides options to locally calibrate the model. STOPS requires the user to input the boardings for all fixed guideway stations in the current year transit system. These numbers are used by STOPS for station-level calibration. Also, the following parameters can be optionally added/changed to accurately reflect the local transit market in STOPS.")]),e._v(" "),a("ol",[a("li",[e._v("The number of current year regional weekday transit unlinked trips.")]),e._v(" "),a("li",[e._v("The number of current year weekday linked journey-to-work and from-work transit trips.")]),e._v(" "),a("li",[e._v("The ratios between current year work and non-work trips on the transit system.")])]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"http://www.ntdprogram.gov/ntdprogram/",target:"_blank",rel:"noopener noreferrer"}},[e._v("National Transit Database"),a("OutboundLink")],1),e._v(" and local transit on-board surveys are the two main sources for this data.")]),e._v(" "),a("p",[e._v('![Completed alternative run in STOPS](Completed STOPS UI.jpg "Completed alternative run in STOPS")')]),e._v(" "),a("h2",{attrs:{id:"outputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[e._v("#")]),e._v(" Outputs")]),e._v(" "),a("p",[e._v("STOPS reports a series of district-to-district and station-to-station flow tables. Some of the results reported by STOPS are listed below:")]),e._v(" "),a("ol",[a("li",[e._v("Linked transit trips (system-wide)")]),e._v(" "),a("li",[e._v("Linked transit trips on the project (FTA's mobility evaluation measure)")]),e._v(" "),a("li",[e._v("Linked fixed guideway transit trips")]),e._v(" "),a("li",[e._v("Change in automobile person miles of travel. This needs to be converted vehicle mils of travel following FTA guidance.")])]),e._v(" "),a("p",[e._v("Detailed flow tables by scenario, purpose, path type, access mode and auto ownership level are also included. STOPS results don't include trips by time-of-day.")]),e._v(" "),a("p",[e._v("STOPS also includes the capability to map various results. Dot density maps of trips by transit access mode, trip purpose, household auto-ownership, transit sub-mode can be generated.")]),e._v(" "),a("p",[e._v('![Sample STOPS output showing station utilization](STOPS output.jpg "Sample STOPS output showing station utilization")')]),e._v(" "),a("h2",{attrs:{id:"summary-of-resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary-of-resources"}},[e._v("#")]),e._v(" Summary of resources")]),e._v(" "),a("p",[e._v("The various data sources required to run STOPS are summarized below:")]),e._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"http://www.fta.dot.gov/grants/15682_15620.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Software and User Guide"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://www.fta.dot.gov/grants/15682_15621.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Census boundary and CTPP files"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://code.google.com/p/googletransitdatafeed/wiki/PublicFeeds",target:"_blank",rel:"noopener noreferrer"}},[e._v("GTFS data"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://www.ntdprogram.gov/ntdprogram/",target:"_blank",rel:"noopener noreferrer"}},[e._v("National Transit Database"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://www.apta.com/resources/statistics/Pages/RidershipArchives.aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("APTA Ridership Reports"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("hr",{staticClass:"footnotes-sep"}),e._v(" "),a("section",{staticClass:"footnotes"},[a("ol",{staticClass:"footnotes-list"},[a("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[a("p",[e._v("FTA's page on STOPS, "),a("a",{attrs:{href:"http://www.fta.dot.gov/grants/15682.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.fta.dot.gov/grants/15682.html"),a("OutboundLink")],1),e._v(" "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[e._v("↩︎")])])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);
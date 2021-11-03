(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{440:function(e,a,t){"use strict";t.r(a);var n=t(7),o=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("PagesInCategory",{attrs:{category:"Spatial Data"}}),e._v(" "),t("p",[e._v("Spatial data is largely comprised of data elements for which spatial or location coordinates exist, thus facilitating the development of spatial relationships across the elements that comprise the data set. Spatial data is critical to transportation planning and modeling because travel models are inherently concerned with analyzing behavioral phenomena that occur in space. This page provides an overview of the different types of spatial data that is encountered in transportation modeling along with a few possible sources for such data.")]),e._v(" "),t("p",[e._v("Spatial data may come in a variety of forms:")]),e._v(" "),t("ul",[t("li",[e._v("Point data: Point data is often associated with XY coordinates or latitude/longitude information. Nodes, intersections, and locations of trip origins and destinations are examples of point data.")]),e._v(" "),t("li",[e._v("Line data: Line data has a linear referencing system that allows the determination of spatial proximity using measures such as length, distance, travel time, speed, and capacity. Links in a highway or transit network constitute examples of line data.")]),e._v(" "),t("li",[e._v("Polygon data: Polygon data represents spatial units such as block groups or census tracts. In travel modeling, traffic analysis zones (TAZ) constitute examples of polygon data. In polygon data, it is important to represent boundaries of the spatial unit which may come in any shape or size.")])]),e._v(" "),t("p",[e._v('Geographic Information Systems (GIS) are software packages that allow the management, manipulation, editing, visualization, and analysis of spatial data. The field of "transport geography" is an important and emerging domain of inquiry that is merging principles of spatial science with the analysis and modeling of travel demand.')]),e._v(" "),t("h2",{attrs:{id:"types-of-spatial-data-in-travel-analysis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#types-of-spatial-data-in-travel-analysis"}},[e._v("#")]),e._v(" Types of Spatial Data in Travel Analysis")]),e._v(" "),t("p",[e._v("There are a variety of spatial data sets used in transportation modeling and forecasting applications. Any data element that has spatial coordinates (such as XY coordinates, latitude/longitude) may be considered spatial data. Data elements that have location coordinates attached to them can be related to one another in a variety of ways. For example, in the simplest form, it is possible to define the distance between two points in space if the location coordinates of each of the two points are known. In a more advanced context, it is possible to establish spatial relationships such as spatial correlation, and explore spatial phenomena such as spatial heterogeneity, using spatial data. The analysis of spatial relationships and spatial phenomena has been gaining increasing attention in the travel modeling domain due to the key spatial influences underlying traveler behavior and values and population evolution. This section presents a brief overview of the different types of spatial data sets typically encountered in travel modeling.")]),e._v(" "),t("h5",{attrs:{id:"land-use-demographic-socio-economic-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#land-use-demographic-socio-economic-data"}},[e._v("#")]),e._v(" Land Use/Demographic/Socio-economic Data")]),e._v(" "),t("p",[e._v("Land use data provides detailed information about the land cover in a region. Land use data may be available at a variety of geographic or spatial resolutions. This includes data available at the detailed parcel level with information about the specific use, economic value, and characteristics of the building stock (if any) in each parcel. Land use data may also be available at the level of the census block, block group, or census tract, with each of these spatial units providing increasingly aggregate levels of information. In travel modeling applications, land use data is often aggregated to the level of the traffic analysis zone (TAZ) with each zone described by a number of characteristics including such items as land area, centroid location (coordinates), shape of zonal boundary, land cover information, area type, population composition, building stock and use, and employment makeup. Land use data serves as a critical input to the transportation modeling process. In integrated land use - transport models, land use characteristics change over time in response to changes in transport network accessibility.")]),e._v(" "),t("p",[t("img",{attrs:{src:"MAG_Population_in_TAZ.jpg",alt:"Sample Thematic Land Use Map Depicting Population",title:"Sample Thematic Land Use Map Depicting Population"}})]),e._v(" "),t("p",[t("em",[e._v("Sources of Land Use Data")]),e._v(": Census Bureau, County Assessor's Office, Dun and Bradstreet, InfoUSA, Bureau of Land Management")]),e._v(" "),t("p",[e._v("A special form of socio-economic data is a "),t("a",{attrs:{href:"Synthetic_Population"}},[e._v("Synthetic Population")]),e._v(", which stores every agent individually. Rather than providing, for example, number of households by zone, a synthetic population provides a record for every household with all its attributes (such as home TAZ, household size, household income, etc.).")]),e._v(" "),t("h5",{attrs:{id:"network-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#network-data"}},[e._v("#")]),e._v(" Network Data")]),e._v(" "),t("p",[e._v("Network data includes detailed information about multimodal "),t("a",{attrs:{href:"Transportation_Networks"}},[e._v("Transportation Networks")]),e._v(" in a region. Transportation models typically include data about highway networks and transit networks, although increasing interest in the use of non-motorized modes of transportation (bicycle and walk) is motivating the development of bicycle and pedestrian network data as well. Network data is typically comprised of nodes and links with every node located in space through the use of XY coordinates, and links connecting consecutive nodes. Virtually all model networks include centroid connectors that capture the")]),e._v(" "),t("p",[e._v("Highway networks may include thousands of nodes and links. Nodes often represent interchanges, signalized or unsignalized intersections, or other points where transitions in traffic can take place. In addition to XY coordinates, nodes may be characterized by turn restrictions or penalties, type of intersection control, and signal control configuration (if a traffic signal is present). Links are often described by length, capacity, number of lanes, posted speed, and freeflow speed. The congested speed on any link may be calculated through the use of an appropriate volume-delay function (VDF).")]),e._v(" "),t("p",[t("a",{attrs:{href:"Transit_networks"}},[e._v("Transit networks")]),e._v(" are also comprised of nodes and links. Nodes generally comprise bus or rail stops along transit routes and are spatially located by XY coordinates. Stop attributes may be attached to a node to describe the characteristics of the stop, typical dwell times, and frequency of vehicle arrivals at the stop. Links on the transit network connect consecutive stops. Links are described by distance, travel time, and transit vehicle speed. In addition to the spatial data, transit network data includes information about the service frequency and schedule which provides for the accurate representation of transit use and ridership in the travel demand model. Other spatial data elements associated with transit networks include the locations and capacity of park-n-ride facilities, and access and egress legs or links for each zone. Intra- and intermodal transfer locations are also identified in transit networks.")]),e._v(" "),t("p",[e._v('![Sample Highway Network](MAG Highway Networks.jpg "Sample Highway Network")')]),e._v(" "),t("p",[t("em",[e._v("Sources of Highway Network Data")]),e._v(": TIGER/Line Files (Census Bureau), Navteq, Tele Atlas, OpenStreetMap, Cities and Counties, Google Maps, ArcGIS")]),e._v(" "),t("p",[t("em",[e._v("Sources of Transit Network Data")]),e._v(": Transit agencies, Google Transit Feed")]),e._v(" "),t("h5",{attrs:{id:"travel-survey-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#travel-survey-data"}},[e._v("#")]),e._v(" Travel Survey Data")]),e._v(" "),t("p",[t("a",{attrs:{href:"Travel_surveys"}},[e._v("Travel Survey Data")]),e._v(" offers information about all of the trips and activities (usually outside the home) that individuals undertake over the course of a day or more (multiday travel surveys capture travel information for a number of days). Travel surveys are typically administered through the phone or internet (although mail-based surveys are still in existence), and technology is enabling the administration of travel surveys through mobile technology such as Smartphones. Global Positioning System (GPS) based travel surveys are gaining increasing acceptance in the transportation planning profession as they allow the passive tracking of travelers through networks while obtaining very detailed spatial and temporal information about all trips that an individual undertook over the course of a day ("),t("a",{attrs:{href:"http://onlinepubs.trb.org/onlinepubs/nchrp/nchrp_syn_301.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Czerniak, 2002"),t("OutboundLink")],1),e._v("). Regardless of the type of travel survey conducted, travel survey data sets include information about home locations for households, work and school locations for individuals, and origins and destinations of all trips. At the most detailed resolution, these locations may be identified by XY coordinates (latitude/longitude); when concerns about privacy need to be addressed or if such detailed point location information was not collected in the survey data, then locations in a travel survey data set may be geocoded to more aggregate spatial units such as a traffic analysis zone (TAZ), tract, zip code, block group, or block. Geocoded trip information allows tracing the movements of people through time and space, quantifying action spaces and time-space prisms, and visualizing trip chaining patterns. By combining land use data with travel survey data, it is possible to establish relationships between the built environment, network accessibility, and traveler behavior.")]),e._v(" "),t("p",[t("img",{attrs:{src:"LocationDataExample.jpg",alt:"Sample Mapping of Locations of Trip Ends",title:"Sample Mapping of Locations of Trip Ends"}})]),e._v(" "),t("p",[t("em",[e._v("Sources of Travel Survey Data")]),e._v(": National Household Travel Survey (NHTS), Metropolitan Travel Survey Archive ( "),t("a",{attrs:{href:"http://www.surveyarchive.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.surveyarchive.org/"),t("OutboundLink")],1),e._v(" ), Transportation Secure Data Center (TSDC) of the National Renewable Energy Laboratory ("),t("a",{attrs:{href:"http://www.nrel.gov/vehiclesandfuels/secure_transportation_data.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.nrel.gov/vehiclesandfuels/secure_transportation_data.html"),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("p",[e._v("In most cases, it is necessary to contact the agency in charge of data collection to obtain the survey records with geocoded trip information. Data available at public websites is usually stripped of all geocoded information.")]),e._v(" "),t("h2",{attrs:{id:"analysis-of-spatial-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#analysis-of-spatial-data"}},[e._v("#")]),e._v(" Analysis of Spatial Data")]),e._v(" "),t("p",[e._v("It is possible to establish relationships among spatial units using spatial analytical techniques. Spatial analysis methods have been used to study spatial correlation and heterogeneity in behavioral patterns and choice processes (e.g., "),t("a",{attrs:{href:"http://www.sciencedirect.com/science/article/pii/S0191261503000055",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bhat and Guo, 2004"),t("OutboundLink")],1),e._v("), estimate regression equations that account for geographical differences (e.g., "),t("a",{attrs:{href:"http://link.springer.com/chapter/10.1007/978-3-642-03647-7_22",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wheeler and Páez, 2010"),t("OutboundLink")],1),e._v("), explore patterns of development and dispersion (e.g., "),t("a",{attrs:{href:"http://www.tandfonline.com/doi/abs/10.2747/0272-3638.19.3.232#.Ujov_NKsOSo",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lowe, 1998"),t("OutboundLink")],1),e._v("), and quantify opportunity-based accessibility measures (e.g., "),t("a",{attrs:{href:"http://trb.metapress.com/content/n43424635307x00r/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chen et al, 2011"),t("OutboundLink")],1),e._v("). Geographic Information Systems (GIS) software packages offer a wide variety of tools to analyze and visualize spatial data. The field of spatial econometrics ("),t("a",{attrs:{href:"http://link.springer.com/book/10.1007/978-94-015-7799-1/page/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Anselin, 1988"),t("OutboundLink")],1),e._v("; "),t("a",{attrs:{href:"http://www.crcpress.com/product/isbn/9781420064247",target:"_blank",rel:"noopener noreferrer"}},[e._v("LeSage and Pace, 2009"),t("OutboundLink")],1),e._v(") has extended several traditional "),t("a",{attrs:{href:"Choice_Models"}},[e._v("choice modeling")]),e._v(" methods to account for spatial phenomena of interest. Using GIS tools and information about activity-travel patterns, it is possible to quantify action spaces and time-space prism constraints (e.g., "),t("a",{attrs:{href:"http://www.tandfonline.com/doi/abs/10.1080/02693799108927856#.Ujo0VtKsOSo",target:"_blank",rel:"noopener noreferrer"}},[e._v("Miller, 1991"),t("OutboundLink")],1),e._v("). Opportunity-based accessibility measures quantify the magnitude (amount) of destination opportunities available within various travel time bands from a location. Such accessibility measures can be computed for different modes of transport, trip purposes, and times of day (reflecting business operating hours and transit operating hours). Open source tools are becoming increasingly available to analyze spatial data within GIS environments. "),t("a",{attrs:{href:"https://geodacenter.asu.edu/pysal",target:"_blank",rel:"noopener noreferrer"}},[e._v("PySAL"),t("OutboundLink")],1),e._v(" is an example of a suite of spatial analytical tools that analysts can customize for a variety of applications within GIS software.")]),e._v(" "),t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),t("p",[e._v("Anselin, L. (1988) "),t("a",{attrs:{href:"http://link.springer.com/book/10.1007/978-94-015-7799-1/page/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spatial Econometrics: Methods and Models"),t("OutboundLink")],1),e._v(". Springer.")]),e._v(" "),t("p",[e._v("Bhat, C.R. and J. Guo (2004) "),t("a",{attrs:{href:"http://www.sciencedirect.com/science/article/pii/S0191261503000055",target:"_blank",rel:"noopener noreferrer"}},[e._v("A mixed spatially correlated logit model: formulation and application to residential choice modeling"),t("OutboundLink")],1),e._v(". "),t("em",[e._v("Transportation Research Part B")]),e._v(", "),t("strong",[e._v("38(2)")]),e._v(", pp. 147-168.")]),e._v(" "),t("p",[e._v("Chen, Y., S. Ravulaparthy, K. Deutsch, P. Dalal, S.Y. Yoon, T. Lei, K.G. Goulias, R.M. Pendyala, C.R. Bhat, and H-H. Hu (2011) "),t("a",{attrs:{href:"http://trb.metapress.com/content/n43424635307x00r/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Development of indicators of opportunity-based accessibility"),t("OutboundLink")],1),e._v(". "),t("em",[e._v("Transportation Research Record: Journal of the Transportation Research Board")]),e._v(" "),t("strong",[e._v("2255")]),e._v(", pp. 58-68.")]),e._v(" "),t("p",[e._v("Czerniak, R. (2002) "),t("a",{attrs:{href:"http://onlinepubs.trb.org/onlinepubs/nchrp/nchrp_syn_301.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Collecting, Processing, and Integrating GPS Data into GIS"),t("OutboundLink")],1),e._v(". NCHRP Synthesis 301, National Cooperative Highway Research Program, Transportation Research Board, Washington, D.C.")]),e._v(" "),t("p",[e._v("LeSage, J. and R.K. Pace (2009) "),t("a",{attrs:{href:"http://www.crcpress.com/product/isbn/9781420064247",target:"_blank",rel:"noopener noreferrer"}},[e._v("Introduction to Spatial Econometrics"),t("OutboundLink")],1),e._v(". CRC Press.")]),e._v(" "),t("p",[e._v("Lowe, J.C. (1998) "),t("a",{attrs:{href:"http://www.tandfonline.com/doi/abs/10.2747/0272-3638.19.3.232#.Ujov_NKsOSo",target:"_blank",rel:"noopener noreferrer"}},[e._v("Patterns of spatial dispersion in metropolitan commuting"),t("OutboundLink")],1),e._v(". "),t("em",[e._v("Urban Geography")]),e._v(", "),t("strong",[e._v("19(3)")]),e._v(", pp. 232-253.")]),e._v(" "),t("p",[e._v("Miller, H.J. (1991) "),t("a",{attrs:{href:"http://www.tandfonline.com/doi/abs/10.1080/02693799108927856#.Ujo2SNKsOSp",target:"_blank",rel:"noopener noreferrer"}},[e._v("Modelling accessibility using space-time prism concepts within geographical information systems"),t("OutboundLink")],1),e._v(". "),t("em",[e._v("International Journal of Geographical Information Systems")]),e._v(", "),t("strong",[e._v("5(3)")]),e._v(", pp. 287-301.")]),e._v(" "),t("p",[e._v("Wheeler, D.C. and A. Páez (2010) "),t("a",{attrs:{href:"http://link.springer.com/chapter/10.1007/978-3-642-03647-7_22",target:"_blank",rel:"noopener noreferrer"}},[e._v("Geographically Weighted Regression"),t("OutboundLink")],1),e._v(". In M.M. Fischer and A. Getis, eds, Handbook of Applied Spatial Analysis, Springer, pp. 461-486.")])],1)}),[],!1,null,null,null);a.default=o.exports}}]);
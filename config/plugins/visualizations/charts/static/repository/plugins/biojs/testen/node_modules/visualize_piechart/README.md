





# VizTargetDiseases


Welcome! The purpose of this project is to provide an interactive and confiurable pieChart-web cpomonent making it available to navigate through complicated datasets.

Having a json object (or file) containg data with some minimal information:
1.name 
2.category-type 
3.value 

could build an interactive pieChart visualization.

In this  [example](http://partizanos.github.io/VizTargetDiseases/example/test1.html)
 we visualize relationships among different biological data (protein target, diseases and phenotypes)

## Basic Example Use:


Having included the file in dist folder, you can create can call the web component and pass your data 
(in the correct format) to be visualized.
```
<meta http-equiv="content-type" content="text/html; charset=UTF8">

<script src="pieChart.js"></script>

<div id="myAwesomeDiv"></div>

<script>

var v = vis()

//pass my div to the visualization library
v(document.getElementById("myAwesomeDiv"));

</script>

```       
    
Configuration can be added such as data to be visualized by passing either an array of json objects or a file directly 


## Configuration Options:

set data input,data filter

set colors of labels/data-points/arcs

set Sizes div/text-font/data-points



## Build component:

### Prerequisites:

| Program | Description | Website |
| --- | --- | --- |
| git | Git is a free and open source distributed version control system | https://git-scm.com/  |
| nodejs | Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine | https://nodejs.org/ |
| npm | Node package manager| https://www.npmjs.com/ |
| gulp | JavaScript build system, node.js-based task runner | http://gulpjs.com/ |

### Build Instructions:

Having installed the software mentioned above run the following commands in the terminal or the command prompt:
</br>

1. ``` git clone https://github.com/partizanos/VizTargetDiseases.git ```
2. ```cd VizTargetDiseases```
3. ```npm install```
4. ```gulp build-browser```
5. (optional) to run the examples run a local webserver e.g. ```python -m http.server``` in the project folder and go to the examples url: ```localhost:8000/example ```

##Examples
example-1
![example-1](https://github.com/partizanos/VizTargetDiseases/blob/master/img/gsoc1.png)

example-2
![example-2](https://github.com/partizanos/VizTargetDiseases/blob/master/img/gsoc2.png)

<p <!--style="background-color=#ff6666"-->> Notice: In Windows environment it is required to set the programs mentioned as enviroment variables.</p>




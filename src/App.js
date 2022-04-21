import React from 'react';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {

// Array of colours. --------------------------------------
let colourArray = [ "white", "snow", "honeydew", "mintcream", "azure", "aliceblue", "ghostwhite", "whitesmoke" , "seashell", "beige", "oldlace", "floralwhite", "ivory", "antiquewhite", "linen", "lavenderblush", "mistyrose", "cornsilk", "blanchedalmond", "bisque", "navajowhite", "wheat", "burlywood", "tan", "sandybrown", "goldenrod", "darkgoldenrod", "peru", "chocolate", "saddlebrown", "sienna", "brown", "maroon", "lightsalmon", "salmon", "darksalmon", "lightcoral", "indianred", "crimson", "firebrick", "darkred", "red", "tomato", "coral", "darkorange", "orange", "yellow", "lightyellow", "lemonchiffon", "lightgoldenrodyellow", "papayawhip", "moccasin", "peachpuff", "palegoldenrod", "khaki", "darkkhaki", "gold", "darkolivegreen", "olive", "olivedrab", "yellowgreen", "limegreen", "lime", "lawngreen", "chartreuse", "greenyellow", "springgreen", "mediumspringgreen", "lightgreen", "palegreen", "darkseagreen", "mediumaquamarine", "mediumseagreen", "seagreen", "forestgreen", "green", "darkgreen", "aqua", "cyan", "lightcyan", "paleturquoise", "aquamarine", "turquoise", "mediumturquoise", "darkturquoise", "lightseagreen", "cadetblue", "darkcyan", "teal", "lightsteelblue", "powderblue", "lightblue", "skyblue", "lightskyblue", "deepskyblue", "dodgerblue", "cornflowerblue", "steelblue", "royalblue", "blue", "mediumblue", "darkblue", "navy", "midnightblue", "pink", "lightpink", "hotpink", "deeppink", "palevioletred", "mediumvioletred", "lavender", "thistle", "plum", "violet", "orchid", "fuchsia", "magenta", "mediumorchid", "mediumpurple", "blueviolet", "darkviolet", "darkorchid", "darkmagenta", "purple", "indigo", "darkslateblue", "slateblue", "mediumslateblue", "gainsboro", "lightgray", "silver", "darkgray", "gray", "dimgray", "lightslategray", "slategray", "darkslategray", "black" ];
// Fonts Array --------------------------------------------
let fontsArray = [
  { id: "ft_1", group: "sans-serif", family: "arial" },
  { id: "ft_2", group: "sans-serif", family: "futura" },
  { id: "ft_3", group: "sans-serif", family: "geneva" },
  { id: "ft_4", group: "sans-serif", family: "gill sands" },
  { id: "ft_5", group: "sans-serif", family: "helvetica" },
  { id: "ft_6", group: "sans-serif", family: "impact" },
  { id: "ft_7", group: "sans-serif", family: "lucida grande" },
  { id: "ft_8", group: "sans-serif", family: "optima" },
  { id: "ft_9", group: "sans-serif", family: "tahoma" },
  { id: "ft_10", group: "sans-serif", family: "trebuchet MS" },
  { id: "ft_11", group: "sans-serif", family: "verdana" },
  { id: "ft_12", group: "serif", family: "american typewriter" },
  { id: "ft_13", group: "serif", family: "baskerville" },
  { id: "ft_14", group: "serif", family: "big caslon" },
  { id: "ft_15", group: "serif", family: "didot" },
  { id: "ft_16", group: "serif", family: "georgia" },
  { id: "ft_17", group: "serif", family: "hoefler text" },
  { id: "ft_18", group: "serif", family: "lucida bright" },
  { id: "ft_19", group: "serif", family: "palatino" },
  { id: "ft_20", group: "serif", family: "times new roman" },
  { id: "ft_21", group: "monospaced", family: "andale mono" },
  { id: "ft_22", group: "monospaced", family: "courier" },
  { id: "ft_23", group: "monospaced", family: "courier new" },
  { id: "ft_24", group: "monospaced", family: "lucida sans typewriter" },
  { id: "ft_25", group: "monospaced", family: "monaco" },
  { id: "ft_26", group: "fantasy", family: "copperplate" },
  { id: "ft_27", group: "fantasy", family: "luminari" },
  { id: "ft_28", group: "fantasy", family: "papyrus" },
  { id: "ft_29", group: "script / cursive", family: "bradley hand" },
  { id: "ft_30", group: "script / cursive", family: "comic sans ms" },
  { id: "ft_31", group: "script / cursive", family: "brush script mt" }
  ];
  
  return (
    <>
      <Header />
      <Main colourNames={colourArray} fonts={fontsArray}/>
    </>
  )
}

export default App;
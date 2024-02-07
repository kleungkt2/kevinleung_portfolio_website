import ProjectSlider from "./../../components/projectSlider";
import { useState } from "react";
import React, { useEffect, useRef } from "react";
import { ReactComponent as QuoteRight } from "./../../assets/images/quote-right.svg";
import { ReactComponent as QuoteLeft } from "./../../assets/images/quote-left.svg";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

import "./home.scss";
import { ReactComponent as AccessImg } from "./../../assets/images/access.svg";
import { ReactComponent as AwsImg } from "./../../assets/images/aws.svg";
import { ReactComponent as CppImg } from "./../../assets/images/cpp.svg";
import { ReactComponent as CImg } from "./../../assets/images/c.svg";
import { ReactComponent as PythonImg } from "./../../assets/images/python.svg";
import { ReactComponent as JavaImg } from "./../../assets/images/java.svg";
import { ReactComponent as GoImg } from "./../../assets/images/go.svg";
import { ReactComponent as PostgreImg } from "./../../assets/images/postgresql.svg";
import { ReactComponent as ExcelVBAImg } from "./../../assets/images/excelvba.svg";
import { ReactComponent as DeepLearningImg } from "./../../assets/images/deep-learning.svg";
import { ReactComponent as HadoopImg } from "./../../assets/images/hadoop.svg";
import { ReactComponent as NLPImg } from "./../../assets/images/nlp.svg";

import { ReactComponent as ReactImg } from "./../../assets/images/react.svg";
import { ReactComponent as DockerImg } from "./../../assets/images/docker.svg";
import { ReactComponent as ElasticSearchImg } from "./../../assets/images/elasticsearch.svg";
import { ReactComponent as ExpressJSImg } from "./../../assets/images/express.svg";
import { ReactComponent as GitImg } from "./../../assets/images/git.svg";
import { ReactComponent as JQueryImg } from "./../../assets/images/jquery.svg";
import { ReactComponent as LinuxImg } from "./../../assets/images/linux.svg";
import { ReactComponent as ShellImg } from "./../../assets/images/shell.svg";
import { ReactComponent as MatlabImg } from "./../../assets/images/matlab.svg";
import { ReactComponent as KerasImg } from "./../../assets/images/keras.svg";
import { ReactComponent as MachineLearningImg } from "./../../assets/images/machine-learning.svg";
import { ReactComponent as AirflowImg } from "./../../assets/images/airflow.svg";
import { ReactComponent as MySQLImg } from "./../../assets/images/mysql.svg";
import { ReactComponent as NumpyImg } from "./../../assets/images/numpy.svg";
import { ReactComponent as PandasImg } from "./../../assets/images/pandas.svg";
import { ReactComponent as PytorchImg } from "./../../assets/images/pytorch.svg";
import { ReactComponent as RImg } from "./../../assets/images/r-lang.svg";
import { ReactComponent as SklearnImg } from "./../../assets/images/sklearn.svg";
import { ReactComponent as SparkImg } from "./../../assets/images/spark.svg";

import { ReactComponent as NodeImg } from "./../../assets/images/node.svg";
import { ReactComponent as MongoImg } from "./../../assets/images/mongo.svg";
import { ReactComponent as JavascriptImg } from "./../../assets/images/javascript.svg";
import { ReactComponent as SassImg } from "./../../assets/images/sass.svg";
import { ReactComponent as TypescriptImg } from "./../../assets/images/typescript.svg";
import { ReactComponent as SolidityImg } from "./../../assets/images/solidity.svg";
const MathematicsData = [
  { url: "https://github.com/kleungkt/differential-equations", text: ["Differential", "Equations"] },
  { url: "https://github.com/kleungkt/discrete-maths", text: ["Discrete", "Maths"] },
  { url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/", text: ["Linear", "Algebra"] },
  { url: "https://github.com/kleungkt/maths-analysis", text: ["Maths", "Analysis"] },
  { url: "https://github.com/kleungkt/data-analytics-tool", text: ["Maths for", "Data Science"] },
  { url: "https://github.com/kleungkt/matrix-computation", text: ["Matrix", "Computation"] },
  { url: "https://github.com/kleungkt/multivariable-calculus", text: ["Multivariable", "Calculus"] },
  { url: "https://github.com/kleungkt/Numerical-Analysis", text: ["Numerical", "Analysis"] },
  { url: "https://www.edx.org/learn/computer-programming/seoul-national-university-introduction-to-optimization?index=product&queryID=d52458e729cc2b6148a1c606e1b845e0&position=2&results_level=first-level-results&term=+Introduction+to+Optimization&objectID=course-597ffd81-454b-4d69-b28c-3319c6cfcfd5&campaign=Introduction+to+Optimization&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch", text: "Optimization" },
  { url: "https://github.com/kleungkt/probability", text: "Probability" },
  { url: "https://github.com/kleungkt/Real-Analysis", text: ["Real", "Analysis"] },
  { url: "https://github.com/kleungkt/Regression-Analysis", text: ["Regression", "Analysis"] },
  { url: "https://github.com/kleungkt/Statistical-Inference", text: ["Statistical", "Inference"] },
  { url: "https://github.com/kleungkt/Stochastic-Processing", text: ["Stochastic", "Process"] },
  { url: "https://www.coursera.org/learn/tensorflow-sequences-time-series-and-prediction", text: ["Time", "Series"] },
];
const DataScienceTechStackData = [
  {
    imgComponent: AirflowImg,
    text: "Airflow",
  },
  {
    imgComponent: DeepLearningImg,
    text: ["Deep", "Learning"],
  },
  {
    imgComponent: ExcelVBAImg,
    text: "ExcelVBA",
  },
  {
    imgComponent: HadoopImg,
    text: "Hadoop",
  },
  {
    imgComponent: KerasImg,
    text: "Keras",
  },
  {
    imgComponent: MachineLearningImg,
    text: ["Machine", "Learning"],
  },
  {
    imgComponent: MatlabImg,
    text: "Matlab",
  },
  {
    imgComponent: AccessImg,
    text: ["Microsoft", "Access"],
  },
  {
    imgComponent: MongoImg,
    text: "MongoDB",
  },
  {
    imgComponent: MySQLImg,
    text: "MySQL",
  },
  {
    imgComponent: NLPImg,
    text: ["Natural", "Language", "Processing"],
  },
  {
    imgComponent: NumpyImg,
    text: "Numpy",
  },
  {
    imgComponent: PandasImg,
    text: "Pandas",
  },
  {
    imgComponent: PostgreImg,
    text: "PostgreSQL",
  },
  {
    imgComponent: PytorchImg,
    text: "Pytorch",
  },
  {
    imgComponent: RImg,
    text: "R",
  },
  {
    imgComponent: SklearnImg,
    text: "Scikit-learn",
  },
  {
    imgComponent: SparkImg,
    text: "Spark",
  },
];
const SoftwareEngineeringTechStackData = [
  {
    imgComponent: AwsImg,
    text: "AWS",
  },
  {
    imgComponent: CImg,
    text: "C",
  },
  {
    imgComponent: CppImg,
    text: ["C++", "(11/14/17/20)"],
  },
  {
    imgComponent: DockerImg,
    text: "Docker",
  },
  {
    imgComponent: ElasticSearchImg,
    text: ["Elastic", "Search"],
  },
  {
    imgComponent: ExpressJSImg,
    text: "ExpressJS",
  },
  {
    imgComponent: GitImg,
    text: "Git",
  },
  {
    imgComponent: GoImg,
    text: "Go",
  },
  {
    imgComponent: JavascriptImg,
    text: "JavaScript",
  },
  {
    imgComponent: JQueryImg,
    text: "JQuery",
  },
  {
    imgComponent: JavaImg,
    text: "Java",
  },
  {
    imgComponent: LinuxImg,
    text: "Linux",
  },
  {
    imgComponent: NodeImg,
    text: "Node.JS",
  },

  {
    imgComponent: PythonImg,
    text: "Python",
  },

  {
    imgComponent: ReactImg,
    text: "React",
  },
  {
    imgComponent: ShellImg,
    text: "Shell",
  },
  {
    imgComponent: SolidityImg,
    text: "Solidity",
  },
  {
    imgComponent: TypescriptImg,
    text: "Typescript",
  },
];
const Data = [
  {
    id: 0,
    img: "https://ik.imagekit.io/onyedika/phoneapp_oXM1Z9FA_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667104369642",
  },
  {
    id: 1,
    img: "https://ik.imagekit.io/onyedika/slide/pipar-beta?ik-sdk-version=javascript-1.4.3&updatedAt=1664831519274",
  },
  {
    id: 2,
    img: "https://ik.imagekit.io/onyedika/slide/pipar_peinACEKO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651255256618",
  },
  {
    id: 3,
    img: "https://ik.imagekit.io/onyedika/slide/calender_S6GI-SE7_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651255256123",
  },
  {
    id: 4,
    img: "https://ik.imagekit.io/onyedika/slide/movie_Si8QWOouP.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651255256396",
  },
  {
    id: 5,
    img: "https://ik.imagekit.io/onyedika/slide/natour_QGZwpr7Ta.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651255256510",
  },
  {
    id: 6,
    img: "https://ik.imagekit.io/onyedika/slide/ncehr_GV14iEwWG.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651255256179",
  },
  {
    id: 7,
    img: "https://ik.imagekit.io/onyedika/slide/guvve_sUg2If5kc.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651255256276",
  },
  {
    id: 8,
    img: "https://ik.imagekit.io/onyedika/slide/web3-forum_2lXPIycqd.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651255256840",
  },
];

function Home() {
  const navigate = useNavigate();
  const Illus = useRef();
  const i = gsap.utils.selector(Illus);
  const tlm = useRef();
  const dlm = useRef();

  // useEffect(() => {
  //     dlm.current = gsap.timeline()
  //     .fromTo(i(".c-tween"), {scale: 0.7}, {
  //         scale: 1, repeat: -1, yoyo: true,
  //       })
  // });

  useEffect(() => {
    tlm.current = gsap
      .timeline()
      .fromTo(
        i(".b-one"),
        { fill: "#1E2128", opacity: 0, scale: 0.7 },
        {
          fill: "#FF605C",
          opacity: 1,
          scale: 1.3,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          stagger: 0.1,
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".b-two"),
        { fill: "#1E2128", opacity: 0, scale: 0.7 },
        {
          fill: "#FFBD44",
          opacity: 1,
          scale: 1.3,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          stagger: 0.1,
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".b-three"),
        { fill: "#1E2128", opacity: 0, scale: 0.7 },
        {
          fill: "#00CA4E",
          opacity: 1,
          scale: 1.3,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          stagger: 0.1,
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".a-one"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".a-two"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".a-three"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".a-four"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".a-five"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".a-six"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".a-seven"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".a-eight"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".a-nine"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          repeat: -1,
          yoyo: true,
        }
      );
  });

  const [background, setBackground] = useState("");

  const image = Data.filter((data) => data.id === background).map(
    (filteredData) => filteredData.img
  );

  const nav = () => {
    return navigate("/work"), window.location.reload();
  };

  const Styles = {
    backgroundImage: `url(${image})`,
  };

  const hiddenElements = document.querySelectorAll(".hidden");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  hiddenElements.forEach((el) => observer.observe(el));

  return (
    <div className="home">
      <div className="home-intro hidden">
        <div className="content">
          <div className="content-tertiary">
            <p>
              <span>✌🏻</span> Hi there! I'm Kevin Leung
            </p>
          </div>
          <div className="content-primary">
            <h1>
              a <span>Quant Developer</span> and <span>Data Engineer</span>.
            </h1>
          </div>
          <div className="content-secondary">
            <p>
              I develop <span>Trading Strategies</span>,{" "}
              <span>Trading Systems</span> and <span>Data Pipeline</span>.
            </p>
            <p>
              I have extensive background in <span>Software Engineering</span>,{" "}
              <span>Data Science</span>, <span>Mathematics</span>, and{" "}
              <span>Finance</span>.
            </p>
          </div>
        </div>

        <div className="hero-icon">
          <svg
            ref={Illus}
            viewBox="0 0 3170 2318"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2258.58 1777.45C2261.92 1847.89 2205.69 1906.8 2135.18 1906.8V2038.47L1871.04 2031.8L1736.18 2028.32L1195.42 2014.61L1236.92 1781.23H1338.85L1473.93 1494.53C1496.71 1444.04 1537.77 1403.92 1588.77 1382.3L1766.44 1306.92C1776.23 1320.05 1789.58 1330.5 1804.96 1336.95C1807.64 1338.11 1810.4 1339.13 1813.23 1340C1817.44 1341.31 1821.79 1342.32 1826.29 1343.05H1826.36C1829.33 1343.56 1832.31 1343.85 1835.36 1344.07C1837.39 1344.21 1839.35 1344.29 1841.38 1344.29C1842.47 1344.44 1843.56 1344.44 1844.64 1344.44C1850.95 1344.66 1857.34 1344.66 1863.65 1344.44C1866.7 1344.37 1869.67 1344.29 1872.72 1344.08C1875.77 1343.86 1878.81 1343.57 1881.79 1343.06C1886.29 1342.33 1890.64 1341.32 1894.85 1340.01C1897.68 1339.14 1900.44 1338.12 1903.12 1336.96C1928.37 1326.44 1947.88 1305.18 1956.01 1279L2163.49 1397.4C2212.75 1425.55 2244.23 1476.84 2246.92 1533.5L2258.58 1777.45Z"
              fill="#14E956"
            />
            <g opacity="0.55">
              <g opacity="0.55">
                <g opacity="0.55">
                  <g opacity="0.55">
                    <g opacity="0.55">
                      <g opacity="0.55">
                        <path
                          opacity="0.55"
                          d="M1813.22 1340L1618.72 1418.13C1567.72 1439.75 1526.66 1479.87 1503.88 1530.36L1380.47 1792.28C1373.34 1807.41 1358.12 1817.06 1341.4 1817.06H1230.52L1236.9 1781.22H1338.83L1473.91 1494.52C1496.69 1444.03 1537.75 1403.91 1588.75 1382.29L1766.42 1306.91C1776.21 1320.04 1789.56 1330.49 1804.94 1336.94C1807.63 1338.11 1810.39 1339.12 1813.22 1340Z"
                          fill="white"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <path
              d="M1960.27 1170.09V1251.27C1960.27 1260.92 1958.82 1270.21 1955.99 1278.98C1947.86 1305.17 1928.35 1326.43 1903.1 1336.94C1900.42 1338.1 1897.66 1339.12 1894.83 1339.99C1890.62 1341.3 1886.27 1342.31 1881.77 1343.04C1878.8 1343.55 1875.75 1343.84 1872.7 1344.06C1869.65 1344.28 1866.68 1344.35 1863.63 1344.42C1857.32 1344.64 1850.93 1344.64 1844.62 1344.42C1843.53 1344.42 1842.44 1344.35 1841.36 1344.27C1839.33 1344.27 1837.37 1344.2 1835.34 1344.05C1832.29 1343.83 1829.32 1343.54 1826.34 1343.03C1826.27 1342.96 1826.27 1343.03 1826.27 1343.03C1821.77 1342.3 1817.42 1341.29 1813.21 1339.98C1810.45 1339.11 1807.7 1338.09 1804.94 1336.93C1789.56 1330.47 1776.21 1320.03 1766.42 1306.9C1754.74 1291.37 1747.85 1272.15 1747.85 1251.33C1793.48 1257.5 1839.11 1248.43 1884.75 1224.2C1886.85 1223.11 1888.89 1221.95 1890.99 1220.72C1892.95 1219.63 1894.83 1218.54 1896.79 1217.38C1899.55 1215.78 1902.23 1214.19 1904.92 1212.45C1907.02 1211.07 1909.13 1209.69 1911.23 1208.31C1927.63 1197.51 1943.95 1184.82 1960.27 1170.09Z"
              fill="#FBD6A2"
            />
            <g opacity="0.3">
              <g opacity="0.3">
                <g opacity="0.3">
                  <g opacity="0.3">
                    <g opacity="0.3">
                      <g opacity="0.3">
                        <path
                          opacity="0.3"
                          d="M1960.27 1170.09V1251.27C1960.27 1260.92 1958.82 1270.21 1955.99 1278.98C1947.86 1305.17 1928.35 1326.43 1903.1 1336.94C1900.42 1338.1 1897.66 1339.12 1894.83 1339.99C1890.62 1341.3 1886.27 1342.31 1881.77 1343.04C1878.8 1343.55 1875.75 1343.84 1872.7 1344.06C1869.65 1344.28 1866.68 1344.35 1863.63 1344.42C1857.32 1344.64 1850.93 1344.64 1844.62 1344.42C1843.53 1344.42 1842.44 1344.35 1841.36 1344.27C1867.55 1327.8 1884.74 1298.78 1884.74 1265.85V1224.21C1886.84 1223.12 1888.88 1221.96 1890.98 1220.73C1892.94 1219.71 1894.82 1218.55 1896.78 1217.39C1899.54 1215.79 1902.22 1214.2 1904.91 1212.46C1907.01 1211.15 1909.12 1209.78 1911.22 1208.32C1927.63 1197.51 1943.95 1184.82 1960.27 1170.09Z"
                          fill="#1E2128"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <path
              d="M1367.08 947.37C1263.74 949.5 1222.28 755.48 1363.32 771.59V916.96C1364.22 927.34 1365.45 937.48 1367.08 947.37Z"
              fill="#FBD6A2"
            />
            <g opacity="0.55">
              <g opacity="0.55">
                <g opacity="0.55">
                  <g opacity="0.55">
                    <g opacity="0.55">
                      <g opacity="0.55">
                        <path
                          opacity="0.55"
                          d="M1367.08 947.37C1263.74 949.5 1222.28 755.48 1363.32 771.59V772.9C1284.01 790.23 1302.33 904.12 1365.77 937.89C1366.1 941.08 1366.59 944.26 1367.08 947.37Z"
                          fill="white"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <path
              d="M1365.44 964.89C1327.36 964.89 1292.47 942.48 1271.81 904.6C1250.28 865.13 1249.63 819.94 1270.15 789.46C1280.92 773.46 1307.6 747.61 1365.31 754.2C1374.15 755.21 1380.83 762.69 1380.83 771.59V916.19C1381.71 926.13 1382.89 935.66 1384.36 944.52C1385.19 949.53 1383.8 954.65 1380.55 958.56C1377.31 962.46 1372.53 964.77 1367.45 964.87C1366.77 964.88 1366.11 964.89 1365.44 964.89ZM1345.82 788.17C1328.46 788.44 1309.88 793.11 1299.18 809.01C1286.28 828.16 1287.66 860.58 1302.54 887.84C1313.27 907.5 1329 921.19 1346.7 926.9C1346.41 924.12 1346.14 921.3 1345.89 918.46C1345.85 917.96 1345.82 917.45 1345.82 916.95V788.17Z"
              fill="#1E2128"
            />
            <path
              d="M2079.36 971.74C2083.53 954.33 2086.72 936.01 2088.93 916.96V790.89C2116.65 772.99 2141.09 767.92 2161.12 771.6C2249.34 787.61 2253.67 971.74 2079.36 971.74Z"
              fill="#FBD6A2"
            />
            <path
              d="M2079.36 974.23H2076.19L2076.93 971.15C2081.05 953.96 2084.24 935.63 2086.44 916.67L2086.43 789.52L2087.57 788.78C2113.79 771.84 2139.38 765.05 2161.57 769.13C2200.87 776.27 2227.24 817.89 2222.91 865.96C2218.42 915.91 2178.12 974.23 2079.36 974.23ZM2091.43 792.25V916.95C2089.33 935.25 2086.34 952.73 2082.52 969.21C2175.61 967.99 2213.67 912.82 2217.94 865.5C2222.03 820.03 2197.42 780.71 2160.68 774.04C2140.06 770.27 2116.15 776.56 2091.43 792.25Z"
              fill="#1E2128"
            />
            <path
              d="M2079.36 989.23C2074 989.23 2068.94 986.78 2065.62 982.57C2062.3 978.36 2061.09 972.87 2062.34 967.66C2066.24 951.35 2069.3 933.96 2071.42 915.94V790.89C2071.42 784.95 2074.43 779.42 2079.42 776.19C2108.9 757.14 2138.23 749.59 2164.27 754.38C2211.23 762.91 2242.87 811.46 2237.84 867.3C2232.79 923.55 2188.24 989.23 2079.36 989.23ZM2106.43 800.75V916.95C2106.43 917.62 2106.39 918.3 2106.31 918.96C2104.96 930.6 2103.25 942.03 2101.19 953.13C2170.52 945.86 2199.43 903.77 2203 864.16C2205.89 832.12 2191.1 794.82 2158 788.81C2142.96 786.05 2125.29 790.17 2106.43 800.75Z"
              fill="#1E2128"
            />
            <path
              d="M2088.9 722.44V900.11C2088.9 913.89 2087.59 927.68 2084.84 941.24C2072.51 1002.61 2051.76 1054.63 2023.25 1098.01C2004.97 1126.01 1983.35 1150.39 1958.68 1171.43C1827.01 1283.66 1632.51 1275.1 1501.93 1161.49C1447.96 1114.48 1406.82 1052.53 1379.04 972C1378.17 969.53 1377.37 967.07 1376.65 964.53L1376.58 964.46C1367.73 936.09 1363.3 906.5 1363.3 876.75V475.57L2066.93 485.36L2088.9 722.44Z"
              fill="#FBD6A2"
            />
            <path
              d="M2023.24 1098.01C2004.96 1126.01 1983.34 1150.39 1958.67 1171.43C1827 1283.66 1632.5 1275.1 1501.92 1161.49C1447.95 1114.48 1406.81 1052.53 1379.03 972C1378.16 969.53 1377.36 967.07 1376.64 964.53C1486.69 1048.83 1744.16 1055.21 1956 977.81C1949.68 1048.97 1972.17 1089.02 2023.24 1098.01Z"
              fill="#70DABF"
            />
            <g opacity="0.55">
              <g opacity="0.55">
                <g opacity="0.55">
                  <g opacity="0.55">
                    <g opacity="0.55">
                      <g opacity="0.55">
                        <path
                          opacity="0.55"
                          d="M1545.67 1169.11C1591.37 1208.94 1644.99 1235.85 1700.99 1249.13C1629.46 1241.22 1559.52 1211.55 1501.92 1161.49C1447.95 1114.48 1406.81 1052.53 1379.03 972C1368.51 941.39 1363.29 909.17 1363.29 876.75V475.57L2066.92 485.36L2067.57 492.47L1407.03 483.26V884.44C1407.03 916.8 1412.25 949.08 1422.77 979.69C1450.56 1060.22 1491.62 1122.1 1545.67 1169.11Z"
                          fill="white"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g opacity="0.3">
              <g opacity="0.3">
                <g opacity="0.3">
                  <g opacity="0.3">
                    <g opacity="0.3">
                      <g opacity="0.3">
                        <path
                          opacity="0.3"
                          d="M2088.9 722.44V900.11C2088.9 913.89 2087.59 927.68 2084.84 941.24C2064.53 1042.3 2021.51 1117.89 1958.68 1171.43C1827.01 1283.66 1632.51 1275.1 1501.93 1161.49C1488.07 1149.38 1475.02 1136.39 1462.9 1122.24C1590.29 1202.91 1757.44 1198.85 1874.75 1098.81C1937.58 1045.27 1980.6 969.68 2000.91 868.62C2003.67 855.13 2004.97 841.27 2004.97 827.49V649.9L1989.59 484.28L2066.92 485.37L2088.9 722.44Z"
                          fill="#1E2128"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <path
              d="M1739.82 1268.79C1736.35 1268.79 1732.88 1268.74 1729.4 1268.64C1642.09 1266.16 1557.23 1232.78 1490.46 1174.67C1432.74 1124.43 1390.89 1060.01 1362.52 977.73C1351.44 945.59 1345.82 911.62 1345.82 876.76V643.48C1345.82 633.81 1353.65 625.98 1363.32 625.98C1372.99 625.98 1380.82 633.81 1380.82 643.48V876.76C1380.82 907.73 1385.8 937.86 1395.61 966.32C1421.92 1042.64 1460.46 1102.15 1513.43 1148.26C1639.09 1257.63 1825.64 1261.85 1947.35 1158.08C2008.26 1106.15 2048.75 1032.03 2067.68 937.78C2070.16 925.43 2071.42 912.75 2071.42 900.08V722.45C2071.42 712.78 2079.26 704.95 2088.92 704.95C2098.58 704.95 2106.42 712.78 2106.42 722.45V900.08C2106.42 915.06 2104.93 930.07 2102 944.68C2081.48 1046.81 2037.09 1127.57 1970.06 1184.72C1906.23 1239.14 1824.83 1268.79 1739.82 1268.79Z"
              fill="#1E2128"
            />
            <g opacity="0.3">
              <g opacity="0.3">
                <g opacity="0.3">
                  <g opacity="0.3">
                    <g opacity="0.3">
                      <g opacity="0.3">
                        <path
                          opacity="0.3"
                          d="M2220.87 822.93C2197.03 893.79 2153.05 917.41 2088.93 893.79L2085.52 967.37L2160.47 948.97C2160.47 948.98 2232.22 897.2 2220.87 822.93Z"
                          fill="#1E2128"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g opacity="0.55">
              <g opacity="0.55">
                <g opacity="0.55">
                  <g opacity="0.55">
                    <g opacity="0.55">
                      <g opacity="0.55">
                        <g opacity="0.55">
                          <path
                            opacity="0.55"
                            d="M1310.74 475.59C1395.09 580.7 1530.95 615.89 1709.44 604.91C1709.44 604.91 1559.2 666 1450.53 620.3C1341.86 574.59 1319.93 520.56 1310.74 475.59Z"
                            fill="white"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g opacity="0.55">
                <g opacity="0.55">
                  <g opacity="0.55">
                    <g opacity="0.55">
                      <g opacity="0.55">
                        <g opacity="0.55">
                          <path
                            opacity="0.55"
                            d="M1544.19 639.62C1512.08 639.62 1479.23 635.08 1449.56 622.6C1342.25 577.46 1317.92 523.21 1308.29 476.09L1306.22 465.96L1312.69 474.02C1391.31 571.99 1521.03 613.99 1709.28 602.41L1724.51 601.47L1710.37 607.22C1709.28 607.67 1629.36 639.62 1544.19 639.62ZM1315.48 485.22C1326.73 530.29 1353.94 576.96 1451.5 617.99C1537.5 654.16 1651.31 622.23 1692.65 608.31C1516.91 616.25 1393.27 575.91 1315.48 485.22Z"
                            fill="#1E2128"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <path
              d="M2161.15 771.55C2141.06 767.92 2116.61 773 2088.89 790.85C2028.82 773.29 2007.71 678.33 2005.75 545.64C1760.4 630.45 1481.09 675.43 1363.28 578.87V711.92C934.75 393.08 1391.36 -196.22 2004.37 177.4C1976.58 57.4101 2119.21 31.0701 2073.29 179.79C2073.29 179.79 2074.02 179.14 2075.39 177.83C2076.33 176.96 2077.2 176.16 2078.15 175.29C2078.95 174.64 2079.89 173.77 2080.91 172.9C2134.45 127.49 2180.44 145.55 2185.09 175.95C2189.01 200.4 2166.16 232.83 2099.12 246.54C2291.23 209.75 2321.92 600.13 2161.15 771.55Z"
              fill="#5D5D5D"
            />
            <path
              d="M1308.13 464.98C1314 485.9 1322.66 505.72 1333.78 523.33C1344.84 540.82 1358.83 556.33 1374.38 565.32L1352.26 592.45C1343.33 583.21 1336.46 573.02 1330.91 562.59C1325.37 552.14 1321.14 541.38 1317.84 530.54C1311.28 508.84 1308.24 486.73 1308.13 464.98Z"
              fill="#1E2128"
            />
            <g opacity="0.55">
              <g opacity="0.55">
                <g opacity="0.55">
                  <g opacity="0.55">
                    <g opacity="0.55">
                      <g opacity="0.55">
                        <path
                          opacity="0.55"
                          d="M2010.83 190.75C1743.27 38.31 1507.99 68.64 1366.85 176.96C1372.65 232.1 1322.45 298.33 1269.93 287.23C1199.85 410.85 1211.82 569.44 1344.65 697.34C948.47 375.67 1400.51 -190.63 2004.39 177.4C1982.7 83.8101 2064.75 47.18 2080.06 106.23C2057.57 107.26 2032.51 133.07 2033.05 177.29C2033.19 188.96 2020.97 196.53 2010.83 190.75Z"
                          fill="white"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g opacity="0.55">
              <g opacity="0.55">
                <g opacity="0.55">
                  <g opacity="0.55">
                    <g opacity="0.55">
                      <g opacity="0.55">
                        <path
                          opacity="0.55"
                          d="M2185.09 175.95C2157.23 170.36 2125.24 182.26 2090.56 205.04C2072.42 215.92 2058.06 202.72 2073.29 179.79C2073.29 179.79 2074.02 179.14 2075.39 177.83C2076.12 177.18 2077.06 176.38 2078.15 175.29C2078.95 174.64 2079.89 173.77 2080.91 172.9C2134.46 127.49 2180.45 145.55 2185.09 175.95Z"
                          fill="white"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <path
              d="M2088.93 808.39C2087.28 808.39 2085.63 808.16 2084.02 807.69C2024.29 790.22 1993.84 714.42 1988.87 569.81C1860.67 612.22 1541.74 702.36 1380.83 611.86V711.91C1380.83 718.53 1377.1 724.58 1371.19 727.55C1365.27 730.52 1358.2 729.9 1352.89 725.95C1144.6 570.98 1144.79 363.13 1237.38 225.89C1302.48 129.39 1413.61 63.56 1542.26 45.28C1680.98 25.57 1832.81 59.92 1983.3 144.74C1984.08 106.69 2001.65 81.03 2019.75 69.28C2038.63 57.03 2060.48 57.06 2076.75 69.37C2085.99 76.35 2103.16 95.49 2099.43 139.51C2129.7 124.2 2156.42 125.91 2174.11 134.95C2194.45 145.35 2205.65 166.31 2202.65 188.34C2200.19 206.42 2189.2 222.63 2171.3 235.73C2200.65 247.73 2225.68 271.42 2244.67 305.9C2309.21 423.1 2292.35 657.29 2173.9 783.56C2169.83 787.9 2163.84 789.88 2157.97 788.8C2140.87 785.66 2120.29 791.47 2098.44 805.58C2095.57 807.43 2092.26 808.39 2088.93 808.39ZM2005.78 528.11C2009.33 528.11 2012.85 529.19 2015.83 531.28C2020.42 534.5 2023.2 539.74 2023.28 545.35C2025.22 676.82 2046.66 752.82 2087.03 771.53C2110.2 758.1 2133.17 751.85 2154.22 753.15C2200.09 700.88 2232.37 623.37 2243.23 538.86C2253.86 456.12 2242.93 375.34 2213.99 322.78C2187.41 274.51 2149.9 254.63 2102.44 263.72C2093.03 265.52 2083.86 259.37 2081.98 249.94C2080.11 240.5 2086.21 231.32 2095.63 229.39C2145.82 219.1 2165.95 198.3 2167.94 183.62C2168.95 176.19 2165.38 169.8 2158.15 166.11C2144.61 159.19 2117.44 161.95 2085.36 192.49C2079.59 197.98 2070.83 198.88 2064.08 194.69C2057.31 190.49 2054.23 182.26 2056.58 174.65C2071.73 125.61 2063.1 102.94 2055.62 97.28C2049.46 92.62 2041.8 96.68 2038.78 98.64C2023.78 108.38 2012.59 135.28 2021.43 173.45C2023.02 180.31 2020.34 187.46 2014.63 191.59C2008.91 195.72 2001.29 196.01 1995.27 192.35C1841.99 98.93 1687.03 60.0601 1547.16 79.9301C1428.29 96.8201 1325.94 157.16 1266.37 245.46C1187.39 362.53 1184.1 537.43 1345.81 675.6V578.89C1345.81 572.12 1349.71 565.97 1355.82 563.07C1361.94 560.18 1369.17 561.07 1374.4 565.35C1488.35 658.75 1772.3 607.85 2000.04 529.07C2001.92 528.43 2003.86 528.11 2005.78 528.11Z"
              fill="#1E2128"
            />
            <g opacity="0.3">
              <g opacity="0.3">
                <g opacity="0.3">
                  <g opacity="0.3">
                    <g opacity="0.3">
                      <g opacity="0.3">
                        <path
                          opacity="0.3"
                          d="M2161.12 771.59C2141.09 767.91 2116.64 772.98 2088.93 790.88C2028.84 773.3 2007.74 678.3 2005.78 545.6C1760.42 630.47 1481.13 675.43 1363.32 578.88V711.9C1299.14 664.15 1256.38 610.11 1231.85 554.02V553.94C1278.94 594 1304.01 573.66 1311.21 482.34C1370.16 724.55 1812.99 643.06 1963.51 432.09C1984.46 402.73 2035.38 426.93 2051.5 459.19C2143.88 644.08 2319.88 443.7 2175.84 257.41C2175.92 257.41 2176 257.49 2176.17 257.49C2177.4 258.39 2181.32 260.84 2187.45 264.77C2296.03 343.99 2292.84 631.21 2161.12 771.59Z"
                          fill="#1E2128"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g opacity="0.15">
              <g opacity="0.15">
                <g opacity="0.15">
                  <g opacity="0.15">
                    <g opacity="0.15">
                      <g opacity="0.15">
                        <path
                          opacity="0.15"
                          d="M1634.5 290.103C1697.94 278.606 1744.81 244.069 1739.17 212.962C1733.53 181.855 1677.53 165.958 1614.08 177.454C1550.64 188.951 1503.77 223.488 1509.41 254.595C1515.04 285.702 1571.05 301.599 1634.5 290.103Z"
                          fill="white"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <path
              d="M1552.51 710.5C1539.56 708.65 1527.62 706.59 1516.15 705.13C1504.68 703.65 1493.71 702.92 1483.04 703.09C1472.31 703.09 1462.04 704.78 1451.47 707.54C1440.57 709.86 1430.41 715.04 1417.79 719.71L1417.52 719.81C1416.15 720.32 1414.63 719.62 1414.12 718.25C1413.87 717.57 1413.92 716.85 1414.19 716.24C1419.79 703.94 1428.87 692.42 1441.29 685.19C1453.39 677.64 1467.98 673.19 1482.3 673.12C1496.64 672.77 1510.67 675.86 1523.16 681.47C1535.61 687.23 1546.91 695.04 1555.25 706.33C1556.12 707.51 1555.87 709.17 1554.69 710.04C1554.11 710.47 1553.41 710.63 1552.74 710.53L1552.51 710.5Z"
              fill="#1E2128"
            />
            <path
              d="M1746.83 699.46C1754.31 688.11 1764.95 680.09 1776.96 674.27C1789 668.62 1802.79 665.39 1816.9 666.27C1823.92 666.72 1830.97 667.99 1837.67 670.31C1844.34 672.7 1850.66 675.97 1856.29 680.03C1867.44 688.33 1875.87 699.35 1879.96 711.96C1880.42 713.38 1879.64 714.91 1878.21 715.37C1877.53 715.59 1876.82 715.53 1876.22 715.24L1876.16 715.21C1864.56 709.71 1854.51 704.88 1844.61 701.63C1834.71 698.44 1825.19 696.67 1815.29 696.2C1805.41 695.64 1795.14 696.4 1784.32 697.82C1773.48 699.24 1762.14 701.44 1749.74 703.5L1749.48 703.54C1748.03 703.78 1746.65 702.8 1746.41 701.35C1746.31 700.67 1746.48 700 1746.83 699.46Z"
              fill="#1E2128"
            />
            <path
              d="M2023.31 1110.5C2022.6 1110.5 2021.87 1110.44 2021.15 1110.31C1983.73 1103.77 1941.19 1078.26 1942.54 995.82C1771.44 1053.83 1566.43 1060.59 1437.7 1011.5C1431.25 1009.04 1428.01 1001.81 1430.48 995.36C1432.94 988.91 1440.17 985.67 1446.62 988.14C1574.7 1036.99 1782.41 1027.92 1951.74 966.08C1955.74 964.61 1960.24 965.3 1963.63 967.9C1967.02 970.5 1968.85 974.66 1968.47 978.92C1960.9 1064.37 1997.36 1080.77 2025.44 1085.68C2032.24 1086.87 2036.79 1093.34 2035.61 1100.15C2034.55 1106.22 2029.27 1110.5 2023.31 1110.5Z"
              fill="#1E2128"
            />
            <path
              d="M1956.01 990.33C1953.51 990.33 1950.98 989.58 1948.78 988.02C1943.15 984.02 1941.83 976.22 1945.84 970.59L2078.75 783.65C2082.75 778.02 2090.55 776.7 2096.18 780.71C2101.81 784.71 2103.13 792.51 2099.12 798.14L1966.21 985.08C1963.77 988.5 1959.92 990.33 1956.01 990.33Z"
              fill="#1E2128"
            />
            <path
              d="M1501.6 952.127C1534.43 952.039 1560.95 916.854 1560.84 873.538C1560.72 830.223 1534.01 795.179 1501.18 795.267C1468.34 795.354 1441.82 830.539 1441.94 873.855C1442.05 917.17 1468.76 952.214 1501.6 952.127Z"
              fill="#1E2128"
            />
            <path
              d="M1516.6 881.796C1526.52 881.77 1534.53 869.956 1534.49 855.409C1534.45 840.861 1526.38 829.09 1516.46 829.116C1506.54 829.143 1498.53 840.957 1498.57 855.504C1498.61 870.051 1506.68 881.823 1516.6 881.796Z"
              fill="white"
            />
            <path
              d="M1855.84 873.836C1855.96 830.52 1829.43 795.335 1796.6 795.247C1763.77 795.16 1737.06 830.204 1736.94 873.519C1736.83 916.835 1763.35 952.02 1796.18 952.108C1829.02 952.195 1855.73 917.151 1855.84 873.836Z"
              fill="#1E2128"
            />
            <path
              d="M1799.21 855.495C1799.24 840.948 1791.23 829.133 1781.32 829.107C1771.4 829.08 1763.32 840.852 1763.29 855.399C1763.25 869.946 1771.26 881.761 1781.18 881.787C1791.09 881.813 1799.17 870.042 1799.21 855.495Z"
              fill="white"
            />
            <path
              d="M1533.84 1015.34C1532.98 1015.34 1532.11 1015.32 1531.24 1015.29L1424.57 1011.54C1385.88 1010.18 1354.84 978.8 1353.9 940.09L1350.81 812.63C1350.34 793.44 1357.6 775.44 1371.25 761.94C1384.9 748.44 1402.9 741.39 1422.16 742.05L1552.56 746.63C1571.74 747.3 1589.28 755.62 1601.95 770.04C1614.62 784.46 1620.6 802.93 1618.79 822.04L1606.77 948.97C1603.19 986.66 1571.41 1015.34 1533.84 1015.34ZM1532.13 990.31C1557.59 991.21 1579.47 972.02 1581.87 946.62L1593.89 819.69C1595.04 807.51 1591.23 795.74 1583.16 786.54C1575.09 777.35 1563.9 772.05 1551.68 771.62L1421.28 767.04C1409.08 766.63 1397.53 771.11 1388.83 779.72C1380.13 788.33 1375.5 799.8 1375.8 812.03L1378.89 939.49C1379.51 964.99 1399.96 985.66 1425.45 986.56L1532.13 990.31Z"
              fill="#1E2128"
            />
            <path
              d="M1754.07 1008.07C1716.5 1008.07 1684.72 979.39 1681.16 941.71L1669.14 814.78C1667.33 795.67 1673.31 777.2 1685.98 762.78C1698.65 748.36 1716.19 740.04 1735.37 739.37L1865.77 734.79C1884.92 734.14 1903.04 741.18 1916.69 754.68C1930.34 768.18 1937.59 786.18 1937.12 805.37L1934.03 932.83C1933.1 971.53 1902.05 1002.92 1863.36 1004.28L1756.69 1008.02C1755.8 1008.05 1754.93 1008.07 1754.07 1008.07ZM1756.22 995.53H1756.27H1756.22ZM1868.22 759.74C1867.69 759.74 1867.16 759.75 1866.62 759.77L1736.22 764.35C1723.99 764.78 1712.81 770.08 1704.74 779.27C1696.67 788.46 1692.86 800.24 1694.01 812.42L1706.03 939.35C1708.43 964.74 1730.34 983.88 1755.77 983.04L1862.44 979.29C1887.93 978.39 1908.38 957.72 1909 932.22L1912.09 804.75C1912.39 792.52 1907.76 781.05 1899.06 772.44C1890.76 764.22 1879.86 759.74 1868.22 759.74Z"
              fill="#1E2128"
            />
            <path
              d="M1681.54 854.44C1679.11 854.44 1676.66 853.73 1674.5 852.26C1653.32 837.8 1633.58 837.8 1612.4 852.26C1606.69 856.15 1598.92 854.68 1595.03 848.99C1591.14 843.29 1592.6 835.51 1598.3 831.62C1627.84 811.45 1659.06 811.45 1688.59 831.62C1694.29 835.51 1695.76 843.29 1691.86 848.99C1689.46 852.54 1685.54 854.44 1681.54 854.44Z"
              fill="#1E2128"
            />
            <path
              d="M1924.61 835.44C1918.4 835.44 1913.02 830.82 1912.22 824.5C1911.36 817.65 1916.21 811.4 1923.06 810.54L2078.48 790.98C2085.39 790.13 2091.59 794.98 2092.44 801.82C2093.3 808.67 2088.45 814.92 2081.6 815.78L1926.18 835.34C1925.65 835.4 1925.13 835.44 1924.61 835.44Z"
              fill="#1E2128"
            />
            <path
              d="M1956 1296.49C1954.22 1296.49 1952.41 1296.22 1950.62 1295.64C1941.43 1292.67 1936.37 1282.81 1939.34 1273.61C1941.62 1266.54 1942.78 1259.03 1942.78 1251.27V1170.09C1942.78 1160.42 1950.62 1152.59 1960.28 1152.59C1969.94 1152.59 1977.78 1160.42 1977.78 1170.09V1251.27C1977.78 1262.68 1976.06 1273.81 1972.65 1284.36C1970.25 1291.77 1963.38 1296.49 1956 1296.49Z"
              fill="#1E2128"
            />
            <path
              d="M1766.44 1324.41C1761.13 1324.41 1755.88 1322 1752.44 1317.43C1737.99 1298.22 1730.35 1275.37 1730.35 1251.34C1730.35 1241.67 1738.18 1233.8 1747.85 1233.8C1757.52 1233.8 1765.35 1241.6 1765.35 1251.26C1765.35 1267.71 1770.56 1283.29 1780.41 1296.38C1786.22 1304.1 1784.67 1315.07 1776.95 1320.88C1773.8 1323.27 1770.1 1324.41 1766.44 1324.41Z"
              fill="#1E2128"
            />
            <path
              d="M1783.74 1779.04L1624.6 1738.22C1603.91 1732.91 1582.01 1734.92 1562.63 1743.91L1497.48 1774.11C1476.43 1783.87 1459.81 1801.17 1450.91 1822.59L1435.36 1859.99C1424.98 1884.97 1443.33 1912.47 1470.38 1912.47H1572.72C1577.66 1912.47 1582.56 1911.59 1587.19 1909.86L1640.06 1890.19C1648.74 1887.73 1657.98 1888.13 1666.4 1891.34L1690.12 1900.36C1701.94 1904.86 1714.56 1906.88 1727.19 1906.32L1783.75 1903.78V1779.04H1783.74Z"
              fill="#FDBD91"
            />
            <g opacity="0.55">
              <g opacity="0.55">
                <g opacity="0.55">
                  <g opacity="0.55">
                    <g opacity="0.55">
                      <g opacity="0.55">
                        <path
                          opacity="0.55"
                          d="M1783.73 1789.59V1823.18L1635.15 1785.05C1614.52 1779.76 1592.62 1781.77 1573.19 1790.78L1508.1 1820.94C1487.02 1830.7 1470.42 1848.05 1461.48 1869.42L1445.99 1906.88C1445.25 1908.74 1444.57 1910.6 1444.2 1912.47C1433.48 1902.27 1428.93 1885.88 1435.34 1870.54L1450.91 1833.15C1459.85 1811.7 1476.46 1794.42 1497.46 1784.67L1562.63 1754.43C1581.99 1745.49 1603.89 1743.48 1624.59 1748.77L1783.73 1789.59Z"
                          fill="white"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <path
              d="M1572.71 1929.97H1470.37C1451.81 1929.97 1434.57 1920.75 1424.27 1905.31C1413.96 1889.87 1412.07 1870.42 1419.19 1853.27L1434.73 1815.87C1445.35 1790.33 1465.01 1769.86 1490.1 1758.23L1555.25 1728.03C1578.23 1717.38 1604.4 1714.98 1628.93 1721.27L1788.08 1762.09C1795.82 1764.07 1801.23 1771.05 1801.23 1779.04V1903.79C1801.23 1913.15 1793.86 1920.85 1784.51 1921.27L1727.95 1923.81C1712.83 1924.5 1698.01 1922.11 1683.88 1916.72L1660.17 1907.7C1655.48 1905.92 1650.26 1905.62 1645.4 1906.87L1593.28 1926.26C1586.69 1928.73 1579.77 1929.97 1572.71 1929.97ZM1783.74 1903.79H1783.79H1783.74ZM1601.62 1752.82C1590.76 1752.82 1579.94 1755.16 1569.98 1759.78L1504.83 1789.99C1487.71 1797.92 1474.3 1811.89 1467.05 1829.32L1451.51 1866.72C1448.85 1873.13 1449.53 1880.12 1453.38 1885.9C1457.23 1891.67 1463.42 1894.99 1470.37 1894.99H1572.71C1575.58 1894.99 1578.4 1894.48 1581.08 1893.48L1633.95 1873.81C1634.39 1873.65 1634.83 1873.5 1635.28 1873.38C1647.49 1869.92 1660.75 1870.49 1672.62 1875.01L1696.34 1884.03C1705.98 1887.7 1716.1 1889.33 1726.4 1888.86L1766.24 1887.07V1792.63L1620.25 1755.18C1614.14 1753.6 1607.87 1752.82 1601.62 1752.82Z"
              fill="#1E2128"
            />
            <path
              d="M2135.18 2055.97C2135.03 2055.97 2134.88 2055.97 2134.74 2055.97L1194.97 2032.1C1189.87 2031.97 1185.08 2029.62 1181.86 2025.67C1178.64 2021.72 1177.29 2016.56 1178.19 2011.54L1219.69 1778.16C1221.17 1769.81 1228.44 1763.72 1236.92 1763.72H1327.75L1458.1 1487.06C1482.66 1432.62 1526.68 1389.6 1581.94 1366.18L1759.6 1290.81C1767.03 1287.66 1775.64 1290 1780.46 1296.46C1788.44 1307.16 1799.25 1315.59 1811.73 1320.82C1813.99 1321.8 1816.16 1322.6 1818.37 1323.28C1821.58 1324.28 1824.9 1325.07 1828.29 1325.65C1828.79 1325.71 1829.28 1325.78 1829.77 1325.88C1831.67 1326.18 1833.8 1326.41 1836.6 1326.61C1839 1326.79 1841.33 1326.63 1843.68 1326.94C1843.88 1326.96 1844.26 1326.93 1844.64 1326.93C1844.84 1326.93 1845.04 1326.93 1845.24 1326.94C1851.15 1327.15 1857.14 1327.14 1863.04 1326.94C1866.02 1326.87 1868.7 1326.81 1871.45 1326.61C1874.58 1326.39 1876.85 1326.14 1878.83 1325.8C1882.66 1325.18 1886.24 1324.35 1889.64 1323.29C1891.89 1322.6 1894.06 1321.8 1896.15 1320.89C1917.04 1312.19 1932.67 1295.06 1939.27 1273.8C1940.84 1268.73 1944.63 1264.65 1949.56 1262.71C1954.5 1260.77 1960.04 1261.16 1964.65 1263.79L2172.14 1382.19C2226.92 1413.49 2261.39 1469.74 2264.38 1532.66L2276.06 1776.62C2276.06 1776.63 2276.06 1776.63 2276.06 1776.63C2277.9 1815.51 2264.12 1852.44 2237.25 1880.61C2214.45 1904.52 2184.9 1919.31 2152.67 1923.25V2038.48C2152.67 2043.2 2150.77 2047.72 2147.39 2051.01C2144.13 2054.19 2139.74 2055.97 2135.18 2055.97ZM1216.21 1997.63L2117.68 2020.53V1906.8C2117.68 1897.13 2125.52 1889.3 2135.18 1889.3C2164.47 1889.3 2191.72 1877.63 2211.93 1856.45C2232.13 1835.28 2242.49 1807.52 2241.1 1778.29L2229.42 1534.32C2227.01 1483.41 2199.11 1437.9 2154.79 1412.58L1964.39 1303.93C1952.51 1325.88 1933.4 1343.29 1909.83 1353.1C1906.78 1354.42 1903.38 1355.67 1899.96 1356.72C1895.05 1358.24 1889.85 1359.46 1884.56 1360.31C1881.57 1360.82 1878.25 1361.2 1873.95 1361.5C1870.65 1361.74 1867.41 1361.82 1864.1 1361.9C1857.63 1362.12 1850.93 1362.13 1844.33 1361.9C1843.26 1361.9 1841.92 1361.89 1840.4 1361.75C1838.29 1361.73 1836.22 1361.64 1834.09 1361.49C1830.17 1361.21 1827.04 1360.87 1824.05 1360.38C1823.87 1360.36 1823.68 1360.33 1823.5 1360.3C1818.21 1359.45 1813.01 1358.23 1808.04 1356.69C1804.66 1355.65 1801.26 1354.4 1798 1352.99C1784.26 1347.22 1771.8 1338.69 1761.47 1328.01L1595.6 1398.38C1548.47 1418.36 1510.92 1455.05 1489.87 1501.7L1354.67 1788.67C1351.78 1794.8 1345.61 1798.71 1338.84 1798.71H1251.57L1216.21 1997.63Z"
              fill="#1E2128"
            />
            <path
              d="M2040.65 1592.89C2047.83 1627.83 2051.47 1662.77 2054.59 1697.71C2055.27 1706.45 2055.95 1715.18 2056.45 1723.92L2056.84 1730.47L2056.94 1732.11C2056.97 1732.7 2056.95 1733.8 2056.95 1734.62C2056.97 1736.4 2056.76 1738.18 2056.52 1739.96C2055.44 1747.06 2052.51 1753.94 2048.07 1759.67C2043.65 1765.44 2037.69 1770.06 2030.87 1772.91C2027.49 1774.37 2023.89 1775.36 2020.24 1775.9L2017.5 1776.23L2015.67 1776.4L2012.41 1776.69C2003.7 1777.47 1995 1778.26 1986.28 1778.84C1951.44 1781.58 1916.53 1783.14 1881.61 1784.43C1846.69 1785.76 1811.77 1787.05 1776.88 1788.93L1793.44 1771.43L1793.42 1906.8L1775.92 1889.3H2135.17C2144.83 1889.3 2152.67 1897.14 2152.67 1906.8C2152.67 1916.47 2144.83 1924.3 2135.17 1924.3H1775.92C1766.25 1924.3 1758.42 1916.47 1758.42 1906.8L1758.39 1771.43C1758.39 1762.1 1765.76 1754.46 1774.96 1753.93C1809.85 1751.98 1844.7 1749.45 1879.55 1746.95C1914.4 1744.41 1949.27 1742.14 1984.2 1741.06C1992.93 1740.68 2001.67 1740.52 2010.4 1740.34L2015.63 1740.23C2016.31 1740.21 2016.99 1740.14 2017.64 1739.93C2018.97 1739.58 2020.22 1738.82 2021.34 1737.83C2022.44 1736.82 2023.28 1735.51 2023.77 1734.02C2023.84 1733.64 2024.04 1733.27 2024.08 1732.86C2024.12 1732.59 2024.18 1732.6 2024.22 1732.1L2024.32 1730.46L2024.72 1723.91C2025.23 1715.18 2025.92 1706.44 2026.6 1697.71C2029.77 1662.77 2033.44 1627.83 2040.65 1592.89Z"
              fill="#1E2128"
            />
            <path
              d="M1608.08 1566.99L1590.94 1738.17C1589.97 1747.84 1581.35 1754.89 1571.68 1753.92C1562.01 1752.95 1554.96 1744.33 1555.93 1734.66C1556.05 1733.48 1556.31 1732.25 1556.65 1731.15L1608.08 1566.99Z"
              fill="#1E2128"
            />
            <g opacity="0.3">
              <g opacity="0.3">
                <g opacity="0.3">
                  <g opacity="0.3">
                    <g opacity="0.3">
                      <g opacity="0.3">
                        <path
                          opacity="0.3"
                          d="M2135.18 1906.3H2134.68V1906.8V2018.98L1871.02 2031.29L1728.21 2037.91L1736.55 2028.63L1757.59 2005.27L1757.77 2005.08L1757.71 2004.83L1736.71 1912.84L1783.86 1904.22L1784.26 1904.15L1784.27 1903.74L1786.07 1843.33L2092 1821.87C2126.56 1819.45 2152.74 1789.68 2150.72 1755.1L2139.43 1561.41C2137.08 1521.05 2114.68 1484.56 2079.76 1464.2L1874.35 1344.41C1876.87 1344.2 1879.38 1343.93 1881.86 1343.5C1886.38 1342.77 1890.76 1341.75 1894.99 1340.44C1897.83 1339.56 1900.61 1338.54 1903.31 1337.37C1928.5 1326.87 1948.01 1305.74 1956.29 1279.69L2163.23 1397.78C2212.34 1425.85 2243.73 1476.98 2246.41 1533.47L2258.08 1777.47C2261.41 1847.63 2205.4 1906.3 2135.18 1906.3Z"
                          fill="#1E2128"
                          stroke="#1E2128"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <path
              d="M1757.04 1962.35C1757.04 1978.75 1750.38 1993.66 1739.62 2004.42C1728.85 2015.19 1713.98 2021.84 1697.55 2021.84H1311.85C1278.98 2021.84 1252.35 1995.17 1252.35 1962.34C1252.35 1945.91 1259.01 1931.03 1269.77 1920.23C1280.54 1909.46 1295.41 1902.81 1311.84 1902.81H1697.54C1730.41 1902.81 1757.04 1929.48 1757.04 1962.35Z"
              fill="#D0D0D0"
            />
            <path
              d="M1697.54 2039.35H1311.84C1269.38 2039.35 1234.84 2004.81 1234.84 1962.35C1234.84 1941.81 1242.84 1922.46 1257.37 1907.88C1271.93 1893.32 1291.27 1885.31 1311.84 1885.31H1697.54C1740 1885.31 1774.54 1919.87 1774.54 1962.35C1774.54 1982.92 1766.53 2002.26 1751.99 2016.8C1737.45 2031.34 1718.11 2039.35 1697.54 2039.35ZM1311.84 1920.31C1300.62 1920.31 1290.07 1924.68 1282.14 1932.61C1274.22 1940.56 1269.84 1951.13 1269.84 1962.35C1269.84 1985.51 1288.68 2004.35 1311.84 2004.35H1697.54C1708.76 2004.35 1719.31 1999.98 1727.24 1992.05C1735.17 1984.12 1739.54 1973.57 1739.54 1962.35C1739.54 1939.17 1720.7 1920.31 1697.54 1920.31H1311.84Z"
              fill="#1E2128"
            />
            <path
              d="M1311.84 2021.85H472.42C439.55 2021.85 412.89 1995.18 412.89 1962.35C412.89 1945.92 419.55 1931.04 430.35 1920.24C441.12 1909.47 455.99 1902.82 472.42 1902.82H1311.84C1295.41 1902.82 1280.53 1909.48 1269.77 1920.24C1259 1931.04 1252.35 1945.92 1252.35 1962.35C1252.34 1995.18 1278.97 2021.85 1311.84 2021.85Z"
              fill="#D0D0D0"
            />
            <g opacity="0.55">
              <g opacity="0.55">
                <g opacity="0.55">
                  <g opacity="0.55">
                    <g opacity="0.55">
                      <g opacity="0.55">
                        <path
                          opacity="0.55"
                          d="M511.65 2021.85H477.41C444.54 2021.85 417.88 1995.18 417.88 1962.35C417.88 1945.92 424.54 1931.04 435.34 1920.24C446.11 1909.47 460.98 1902.82 477.41 1902.82H511.65C495.22 1902.82 480.34 1909.48 469.58 1920.24C458.78 1931.04 452.12 1945.92 452.12 1962.35C452.12 1995.18 478.79 2021.85 511.65 2021.85Z"
                          fill="white"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <path
              d="M1697.54 2039.35H1311.84C1269.38 2039.35 1234.84 2004.81 1234.84 1962.35C1234.84 1941.81 1242.84 1922.46 1257.37 1907.88C1271.93 1893.32 1291.27 1885.31 1311.84 1885.31H1697.54C1740 1885.31 1774.54 1919.87 1774.54 1962.35C1774.54 1982.92 1766.53 2002.26 1751.99 2016.8C1737.45 2031.34 1718.11 2039.35 1697.54 2039.35ZM1311.84 1920.31C1300.62 1920.31 1290.07 1924.68 1282.14 1932.61C1274.22 1940.56 1269.84 1951.13 1269.84 1962.35C1269.84 1985.51 1288.68 2004.35 1311.84 2004.35H1697.54C1708.76 2004.35 1719.31 1999.98 1727.24 1992.05C1735.17 1984.12 1739.54 1973.57 1739.54 1962.35C1739.54 1939.17 1720.7 1920.31 1697.54 1920.31H1311.84Z"
              fill="#1E2128"
            />
            <path
              d="M1311.84 2039.35H472.42C429.94 2039.35 395.39 2004.81 395.39 1962.35C395.39 1941.78 403.41 1922.43 417.98 1907.86C432.52 1893.32 451.86 1885.31 472.43 1885.31H1311.85C1321.52 1885.31 1329.35 1893.14 1329.35 1902.81C1329.35 1912.48 1321.52 1920.31 1311.85 1920.31C1300.63 1920.31 1290.08 1924.68 1282.15 1932.61C1274.23 1940.56 1269.85 1951.13 1269.85 1962.35C1269.85 1985.51 1288.69 2004.35 1311.85 2004.35C1321.52 2004.35 1329.35 2012.18 1329.35 2021.85C1329.34 2031.51 1321.51 2039.35 1311.84 2039.35ZM472.42 1920.31C461.2 1920.31 450.65 1924.68 442.72 1932.61C434.76 1940.57 430.38 1951.13 430.38 1962.35C430.38 1985.51 449.24 2004.35 472.41 2004.35H1247.32C1239.42 1992.26 1234.83 1977.84 1234.83 1962.35C1234.83 1947.21 1239.18 1932.72 1247.28 1920.31H472.42Z"
              fill="#1E2128"
            />
            <path
              d="M1228.47 1952.26C1223.87 1953.48 1219.3 1954.12 1214.78 1954.16H412.18C410.58 1954.24 408.98 1954.2 407.42 1954.12C383.91 1952.94 362.76 1936.89 356.29 1912.92L170.12 1227C162.06 1197.25 179.63 1166.59 209.42 1158.45C214.29 1157.12 219.23 1156.47 224.07 1156.47C224.83 1156.47 225.59 1156.47 226.35 1156.58L1025.79 1156.5C1026.4 1156.46 1027.01 1156.46 1027.62 1156.46C1052.27 1156.46 1074.83 1172.86 1081.56 1197.74L1267.74 1883.67C1275.83 1913.46 1258.26 1944.16 1228.47 1952.26Z"
              fill="#B8C5D3"
            />
            <g opacity="0.55">
              <g opacity="0.55">
                <g opacity="0.55">
                  <g opacity="0.55">
                    <g opacity="0.55">
                      <g opacity="0.55">
                        <path
                          opacity="0.55"
                          d="M250.99 1156.59H245.28C246.46 1156.51 247.64 1156.48 248.78 1156.48C249.55 1156.47 250.23 1156.47 250.99 1156.59Z"
                          fill="white"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g opacity="0.55">
                <g opacity="0.55">
                  <g opacity="0.55">
                    <g opacity="0.55">
                      <g opacity="0.55">
                        <path
                          opacity="0.55"
                          d="M251 1174.09H245.29L244.17 1139.13C245.73 1139.03 247.29 1138.98 248.79 1138.98C249.89 1138.98 251.55 1138.98 253.6 1139.29L251 1174.09Z"
                          fill="#1E2128"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g opacity="0.6">
              <g opacity="0.6">
                <g opacity="0.6">
                  <g opacity="0.6">
                    <g opacity="0.6">
                      <g opacity="0.6">
                        <path
                          opacity="0.6"
                          d="M1002.43 1156.52L985.99 1186.94H982.96L971.78 1216.1H210.37C204.71 1216.1 200.36 1221.42 201.82 1226.89C201.83 1226.93 201.84 1226.96 201.85 1227L388 1912.94C394.52 1937.07 415.95 1953.19 439.61 1954.17H419.16C393.82 1955.1 370.2 1938.52 363.26 1912.94L177.3 1227.7L177.11 1227C169.05 1197.23 186.61 1166.58 216.38 1158.43C221.27 1157.13 226.21 1156.47 231.05 1156.47C231.8 1156.47 232.54 1156.47 233.33 1156.56H257.97L1002.43 1156.52Z"
                          fill="white"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <path
              d="M1213.7 1971.72C1180.55 1971.72 1151.72 1949.76 1143.01 1917.5L956.83 1231.59C946.25 1192.59 969.39 1152.2 1008.43 1141.56C1015.99 1139.51 1023.67 1138.41 1031.25 1139.11C1063.09 1140.61 1090.04 1162.26 1098.43 1193.17L1284.62 1879.1C1289.77 1897.97 1287.25 1917.74 1277.52 1934.76C1267.78 1951.79 1251.99 1964 1233.06 1969.14C1233.03 1969.15 1233 1969.16 1232.96 1969.16C1227.45 1970.62 1221.88 1971.47 1216.41 1971.66C1215.5 1971.71 1214.6 1971.72 1213.7 1971.72ZM1228.47 1952.25H1228.52H1228.47ZM1027.66 1173.97C1024.35 1173.97 1020.97 1174.43 1017.61 1175.34C997.2 1180.9 985.08 1202.03 990.62 1222.43L1176.8 1908.36C1181.48 1925.7 1197.22 1937.33 1215.15 1936.7C1218 1936.6 1220.96 1936.14 1223.95 1935.35C1233.82 1932.66 1242.06 1926.28 1247.14 1917.39C1252.23 1908.5 1253.55 1898.17 1250.85 1888.31L1064.66 1202.35C1060.24 1186.08 1046.02 1174.71 1029.28 1174.07C1028.88 1174.05 1028.48 1174.02 1028.08 1173.98L1027.66 1173.97ZM1027.61 1173.92C1027.63 1173.92 1027.65 1173.92 1027.67 1173.93C1027.65 1173.92 1027.63 1173.92 1027.61 1173.92Z"
              fill="#1E2128"
            />
            <g opacity="0.3">
              <g opacity="0.3">
                <g opacity="0.3">
                  <g opacity="0.3">
                    <g opacity="0.3">
                      <g opacity="0.3">
                        <path
                          opacity="0.3"
                          d="M1228.47 1959.27C1224.25 1960.39 1219.99 1961.05 1215.77 1961.2C1190.43 1962.11 1166.81 1945.56 1159.9 1919.96L973.71 1234.03C965.63 1204.27 983.21 1173.59 1013.02 1165.47C1017.9 1164.15 1022.82 1163.49 1027.65 1163.49C1028.41 1163.49 1029.17 1163.49 1029.94 1163.59C1053.61 1164.5 1074.99 1180.65 1081.54 1204.78L1267.73 1890.71C1275.85 1920.47 1258.23 1951.2 1228.47 1959.27Z"
                          fill="#1E2128"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <path
              d="M410.07 1971.7C376.94 1971.7 348.1 1949.74 339.38 1917.5L153.21 1231.59C142.65 1192.61 165.78 1152.23 204.78 1141.57C211.09 1139.85 217.57 1138.97 224.04 1138.97C224.85 1138.97 225.96 1138.97 227.28 1139.08L1025.34 1139C1026.09 1138.97 1026.85 1138.96 1027.61 1138.96C1060.68 1138.96 1089.81 1161.25 1098.45 1193.16L1284.62 1879.07C1295.24 1918.1 1272.11 1958.51 1233.07 1969.13C1233.03 1969.14 1232.99 1969.15 1232.95 1969.16C1226.9 1970.76 1220.84 1971.59 1214.92 1971.64H412.45C411.66 1971.69 410.86 1971.7 410.07 1971.7ZM1228.47 1952.26H1228.52H1228.47ZM224.35 1173.98C220.58 1173.99 217.26 1174.45 214.01 1175.34C193.59 1180.92 181.47 1202.05 186.99 1222.43L373.17 1908.35C377.86 1925.69 393.59 1937.34 411.53 1936.68C411.74 1936.67 411.95 1936.67 412.16 1936.67H1214.78C1217.61 1936.65 1220.74 1936.21 1223.95 1935.36C1244.34 1929.78 1256.4 1908.67 1250.85 1888.27L1064.67 1202.34C1060.15 1185.64 1044.91 1173.98 1027.62 1173.98H1026.88C1026.63 1173.99 1026.05 1174.01 1025.8 1174.01L226.34 1174.09C225.67 1174.09 225 1174.05 224.35 1173.98ZM223.71 1173.89C223.74 1173.89 223.76 1173.9 223.79 1173.9C223.76 1173.9 223.74 1173.9 223.71 1173.89Z"
              fill="#1E2128"
            />
            <path
              d="M670.486 1666.47C693.554 1657.85 699.971 1618 684.819 1577.48C669.667 1536.95 638.685 1511.09 615.617 1519.71C592.549 1528.34 586.132 1568.18 601.284 1608.71C616.436 1649.24 647.419 1675.1 670.486 1666.47Z"
              fill="#1E2128"
            />
            <g opacity="0.3">
              <g opacity="0.3">
                <g opacity="0.3">
                  <g opacity="0.3">
                    <g opacity="0.3">
                      <g opacity="0.3">
                        <path
                          opacity="0.3"
                          d="M1021.13 1401.67C1074.03 1793.89 858.32 1946.29 480.73 1954.16H1175.94L1163.58 1930.76L1021.13 1401.67Z"
                          fill="#1E2128"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <path
              d="M1609.39 1970.77H1659.28C1661.83 1970.77 1663.89 1968.7 1663.89 1966.16V1951.51C1663.89 1948.96 1661.82 1946.89 1659.28 1946.89H1609.39C1606.84 1946.89 1604.78 1948.96 1604.78 1951.51V1966.16C1604.78 1968.71 1606.84 1970.77 1609.39 1970.77Z"
              fill="#1E2128"
            />
            <path
              d="M1526.63 1970.77H1576.52C1579.07 1970.77 1581.13 1968.7 1581.13 1966.16V1951.51C1581.13 1948.96 1579.06 1946.89 1576.52 1946.89H1526.63C1524.08 1946.89 1522.02 1948.96 1522.02 1951.51V1966.16C1522.02 1968.71 1524.08 1970.77 1526.63 1970.77Z"
              fill="#1E2128"
            />
            <g opacity="0.3">
              <g opacity="0.3">
                <g opacity="0.3">
                  <g opacity="0.3">
                    <g opacity="0.3">
                      <g opacity="0.3">
                        <path
                          opacity="0.3"
                          d="M1757.04 1955.36C1757.04 1971.76 1750.38 1986.67 1739.62 1997.43C1728.85 2008.2 1713.98 2014.85 1697.55 2014.85H1311.85C1278.98 2014.85 1252.35 1988.18 1252.35 1955.35C1252.35 1938.92 1259.01 1924.04 1269.77 1913.24C1280.54 1902.47 1295.41 1895.82 1311.84 1895.82H1697.54C1730.41 1895.83 1757.04 1922.49 1757.04 1955.36Z"
                          fill="#1E2128"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g opacity="0.32">
              <g opacity="0.32">
                <g opacity="0.32">
                  <g opacity="0.32">
                    <g opacity="0.32">
                      <g opacity="0.32">
                        <path
                          opacity="0.32"
                          d="M327.31 1475.93C312.34 1416.94 304.11 1368.13 337.82 1359.57C371.53 1351.02 410.99 1391.9 425.96 1450.9C440.93 1509.9 425.73 1564.65 392.02 1573.2C358.31 1581.75 342.28 1534.92 327.31 1475.93Z"
                          fill="white"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g opacity="0.32">
              <g opacity="0.32">
                <g opacity="0.32">
                  <g opacity="0.32">
                    <g opacity="0.32">
                      <g opacity="0.32">
                        <path
                          opacity="0.32"
                          d="M383.64 1683.86C377.53 1659.76 375.15 1639.58 397.44 1633.92C419.74 1628.26 442.77 1643.21 448.88 1667.31C454.99 1691.41 441.88 1715.52 419.58 1721.18C397.28 1726.83 389.75 1707.95 383.64 1683.86Z"
                          fill="white"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <path
              d="M2994.53 2127.58H178.7C149.62 2127.58 126.04 2104 126.04 2074.92C126.04 2045.84 149.62 2022.26 178.7 2022.26H2994.53C3023.61 2022.26 3047.19 2045.84 3047.19 2074.92C3047.19 2104.01 3023.61 2127.58 2994.53 2127.58Z"
              fill="#666666"
            />
            <g opacity="0.55">
              <g opacity="0.55">
                <g opacity="0.55">
                  <g opacity="0.55">
                    <g opacity="0.55">
                      <g opacity="0.55">
                        <path
                          opacity="0.55"
                          d="M3047.2 2074.9C3047.2 2081.57 3045.98 2087.88 3043.72 2093.74C3036.13 2073.98 3016.94 2059.95 2994.51 2059.95H178.71C164.16 2059.95 151 2065.86 141.44 2075.37C136.28 2080.53 132.17 2086.79 129.5 2093.74C127.24 2087.89 126.02 2081.57 126.02 2074.9C126.02 2060.41 131.93 2047.19 141.44 2037.69C151 2028.18 164.16 2022.27 178.71 2022.27H2994.51C3023.61 2022.27 3047.2 2045.86 3047.2 2074.9Z"
                          fill="white"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <path
              d="M2994.53 2145.08H178.71C140.02 2145.08 108.55 2113.61 108.55 2074.92C108.55 2036.23 140.02 2004.76 178.71 2004.76H2994.54C3033.23 2004.76 3064.7 2036.23 3064.7 2074.92C3064.69 2113.61 3033.22 2145.08 2994.53 2145.08ZM178.71 2039.76C159.32 2039.76 143.55 2055.53 143.55 2074.92C143.55 2094.31 159.32 2110.08 178.71 2110.08H2994.54C3013.93 2110.08 3029.7 2094.31 3029.7 2074.92C3029.7 2055.53 3013.93 2039.76 2994.54 2039.76H178.71Z"
              fill="#1E2128"
            />
            <path
              d="M2345.98 1918C2345.98 1886.97 2371.14 1861.81 2402.17 1861.81H2876.76C2890.24 1861.81 2901.17 1850.88 2901.17 1837.4C2901.17 1823.92 2890.24 1812.99 2876.76 1812.99H2397.69C2339.7 1812.99 2292.69 1860 2292.69 1917.99C2292.69 1975.98 2339.7 2022.99 2397.69 2022.99H2876.76C2890.24 2022.99 2901.17 2012.06 2901.17 1998.58C2901.17 1985.1 2890.24 1974.17 2876.76 1974.17H2402.17C2371.14 1974.19 2345.98 1949.03 2345.98 1918Z"
              fill="#34A958"
            />
            <path
              d="M2876.76 2035.5H2397.69C2332.9 2035.5 2280.19 1982.79 2280.19 1918C2280.19 1853.21 2332.9 1800.5 2397.69 1800.5H2876.76C2897.11 1800.5 2913.67 1817.06 2913.67 1837.41C2913.67 1857.76 2897.11 1874.32 2876.76 1874.32H2402.18C2378.09 1874.32 2358.49 1893.92 2358.49 1918.01C2358.49 1942.1 2378.09 1961.7 2402.18 1961.7H2876.76C2897.11 1961.7 2913.67 1978.25 2913.67 1998.6C2913.67 2018.94 2897.11 2035.5 2876.76 2035.5ZM2397.69 1825.5C2346.68 1825.5 2305.19 1866.99 2305.19 1918C2305.19 1969.01 2346.68 2010.5 2397.69 2010.5H2876.76C2883.33 2010.5 2888.67 2005.16 2888.67 1998.59C2888.67 1992.02 2883.33 1986.69 2876.76 1986.69H2402.18C2364.3 1986.69 2333.49 1955.88 2333.49 1918C2333.49 1880.13 2364.3 1849.31 2402.18 1849.31H2876.76C2883.33 1849.31 2888.67 1843.97 2888.67 1837.4C2888.67 1830.83 2883.33 1825.49 2876.76 1825.49H2397.69V1825.5Z"
              fill="#1E2128"
            />
            <g opacity="0.5">
              <g opacity="0.5">
                <g opacity="0.5">
                  <g opacity="0.5">
                    <g opacity="0.5">
                      <g opacity="0.5">
                        <path
                          opacity="0.5"
                          d="M2876.76 1985.9H2402.17C2385.43 1985.9 2370.12 1979.78 2358.27 1969.71C2370.73 1984.37 2389.27 1993.71 2409.98 1993.71H2884.57C2886.03 1993.71 2887.4 1994.01 2888.71 1994.46C2886.98 1989.49 2882.3 1985.9 2876.76 1985.9Z"
                          fill="white"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g opacity="0.5">
              <g opacity="0.5">
                <g opacity="0.5">
                  <g opacity="0.5">
                    <g opacity="0.5">
                      <g opacity="0.5">
                        <path
                          opacity="0.5"
                          d="M2312.21 1925.81C2312.21 1874.37 2354.06 1832.52 2405.5 1832.52H2884.57C2886.03 1832.52 2887.4 1832.82 2888.71 1833.27C2886.98 1828.31 2882.31 1824.71 2876.77 1824.71H2397.7C2346.26 1824.71 2304.41 1866.56 2304.41 1918C2304.41 1945.7 2316.56 1970.61 2335.8 1987.71C2321.13 1971.23 2312.21 1949.54 2312.21 1925.81Z"
                          fill="white"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <path
              d="M2398.65 1861.81C2369.56 1861.81 2345.98 1886.97 2345.98 1918C2345.98 1949.03 2369.56 1974.19 2398.65 1974.19H2868.91V1861.81H2398.65Z"
              fill="white"
            />
            <path
              d="M2868.91 1985.9H2398.65C2363.15 1985.9 2334.27 1955.44 2334.27 1918C2334.27 1880.56 2363.15 1850.1 2398.65 1850.1H2868.91C2875.38 1850.1 2880.62 1855.34 2880.62 1861.81V1974.19C2880.62 1980.66 2875.38 1985.9 2868.91 1985.9ZM2398.65 1873.52C2376.07 1873.52 2357.69 1893.47 2357.69 1918C2357.69 1942.53 2376.06 1962.48 2398.65 1962.48H2857.2V1873.53H2398.65V1873.52Z"
              fill="#1E2128"
            />
            <path
              d="M2497.52 1997.59L2479.77 1983.39C2476.13 1980.48 2470.95 1980.48 2467.31 1983.39L2449.56 1997.59C2445.6 2000.76 2439.73 1997.94 2439.73 1992.87V1920.73C2439.73 1917.12 2442.66 1914.18 2446.28 1914.18H2500.8C2504.41 1914.18 2507.35 1917.11 2507.35 1920.73V1992.87C2507.35 1997.94 2501.48 2000.76 2497.52 1997.59Z"
              fill="#FFEB3B"
            />
            <path
              d="M2445.81 2008.94C2443.45 2008.94 2441.07 2008.41 2438.83 2007.34C2433.22 2004.64 2429.73 1999.1 2429.73 1992.87V1920.73C2429.73 1911.61 2437.15 1904.18 2446.27 1904.18H2500.79C2509.92 1904.18 2517.34 1911.6 2517.34 1920.73V1992.87C2517.34 1999.1 2513.85 2004.64 2508.24 2007.33C2502.62 2010.03 2496.12 2009.29 2491.26 2005.4L2473.52 1991.2L2455.8 2005.4C2452.89 2007.74 2449.37 2008.94 2445.81 2008.94ZM2503.77 1989.78H2503.82H2503.77ZM2473.54 1971.18C2477.94 1971.18 2482.34 1972.65 2486.02 1975.59L2497.34 1984.65V1924.19H2449.73V1984.65L2461.06 1975.59C2464.74 1972.65 2469.14 1971.18 2473.54 1971.18Z"
              fill="#1E2128"
            />
            <g opacity="0.5">
              <g opacity="0.5">
                <g opacity="0.5">
                  <g opacity="0.5">
                    <g opacity="0.5">
                      <g opacity="0.5">
                        <path
                          opacity="0.5"
                          d="M2457.31 1923.94H2449.5V1985.15L2457.31 1978.91V1923.94Z"
                          fill="white"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g opacity="0.5">
              <g opacity="0.5">
                <g opacity="0.5">
                  <g opacity="0.5">
                    <g opacity="0.5">
                      <g opacity="0.5">
                        <path
                          opacity="0.5"
                          d="M2493.68 1975.78C2490.05 1972.87 2485.7 1971.42 2481.35 1971.42C2480.04 1971.42 2478.74 1971.6 2477.45 1971.86C2480.44 1972.47 2483.34 1973.75 2485.87 1975.78L2497.59 1985.15V1978.91L2493.68 1975.78Z"
                          fill="white"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <path
              d="M2510.74 1905.17L2709.83 1912.98L2510.74 1920.79C2506.43 1920.96 2502.8 1917.6 2502.63 1913.29C2502.46 1908.98 2505.82 1905.35 2510.13 1905.18C2510.32 1905.16 2510.54 1905.16 2510.74 1905.17Z"
              fill="#1E2128"
            />
            <g opacity="0.3">
              <g opacity="0.3">
                <g opacity="0.3">
                  <g opacity="0.3">
                    <g opacity="0.3">
                      <g opacity="0.3">
                        <path
                          opacity="0.3"
                          d="M2871.82 1892.07L2347.2 1940.26L2361.09 1882.18L2383.87 1860.84H2426.81H2871.82V1892.07Z"
                          fill="#1E2128"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <path
              d="M2513.4 34.14H3046.08C3086.18 34.14 3118.68 66.65 3118.68 106.74V498.22C3118.68 538.32 3086.17 570.82 3046.08 570.82H2722.9L2607.62 695.71C2579.61 726.05 2528.92 706.24 2528.92 664.94V570.43C2479.6 566.45 2440.79 525.25 2440.79 474.9V106.73C2440.79 66.64 2473.3 34.14 2513.4 34.14Z"
              fill="white"
            />
            <path
              d="M2574.44 725.37C2567.03 725.37 2559.53 724 2552.3 721.17C2528.98 712.05 2513.92 689.99 2513.92 664.95V583.39C2463.52 572.76 2425.8 527.55 2425.8 474.91V106.75C2425.8 58.44 2465.1 19.15 2513.41 19.15H3046.09C3094.4 19.15 3133.7 58.45 3133.7 106.75V498.23C3133.7 546.53 3094.4 585.83 3046.09 585.83H2729.48L2618.65 705.89C2606.92 718.58 2590.9 725.37 2574.44 725.37ZM2513.4 49.13C2481.64 49.13 2455.79 74.97 2455.79 106.73V474.89C2455.79 516.71 2488.44 552.1 2530.12 555.47C2537.91 556.1 2543.91 562.6 2543.91 570.42V664.93C2543.91 680.21 2553.89 689.56 2563.22 693.21C2572.56 696.86 2586.22 696.76 2596.59 685.52L2711.87 560.63C2714.71 557.55 2718.71 555.8 2722.89 555.8H3046.07C3077.83 555.8 3103.68 529.96 3103.68 498.2V106.72C3103.68 74.96 3077.84 49.12 3046.07 49.12H2513.4V49.13Z"
              fill="#1E2128"
            />
            <g opacity="0.2">
              <g opacity="0.2">
                <g opacity="0.2">
                  <g opacity="0.2">
                    <g opacity="0.2">
                      <g opacity="0.2">
                        <path
                          opacity="0.2"
                          d="M3078.51 48.42C3067.11 192.87 2803.81 431.41 2698.09 521.73C2668.54 546.98 2643.18 576.74 2622.86 609.87L2561.16 710.44L2598.35 700.74L2714.44 571L3069.55 564.49L3126.13 515.05V91.27L3078.51 48.42Z"
                          fill="#1E2128"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <path
              d="M3006.31 491.78H2550.27C2532.89 491.78 2518.79 477.69 2518.79 460.3V130.7C2518.79 117.49 2529.5 106.77 2542.72 106.77H3013.86C3027.07 106.77 3037.79 117.48 3037.79 130.7V460.3C3037.79 477.69 3023.69 491.78 3006.31 491.78Z"
              fill="#3C4A59"
            />
            <path
              d="M3006.31 501.31H2550.27C2527.66 501.31 2509.27 482.92 2509.27 460.31V130.71C2509.27 112.27 2524.27 97.26 2542.72 97.26H3013.86C3032.3 97.26 3047.31 112.27 3047.31 130.71V460.31C3047.31 482.91 3028.92 501.31 3006.31 501.31ZM2542.72 116.3C2534.78 116.3 2528.32 122.76 2528.32 130.7V460.3C2528.32 472.4 2538.17 482.25 2550.27 482.25H3006.31C3018.41 482.25 3028.27 472.4 3028.27 460.3V130.7C3028.27 122.76 3021.81 116.3 3013.87 116.3H2542.72V116.3Z"
              fill="#1E2128"
            />
            <g opacity="0.4">
              <g opacity="0.4">
                <g opacity="0.4">
                  <g opacity="0.4">
                    <g opacity="0.4">
                      <g opacity="0.4">
                        <path
                          opacity="0.4"
                          d="M2537.84 460.3V130.7C2537.84 122.76 2544.3 116.3 2552.25 116.3H2542.73C2534.79 116.3 2528.32 122.76 2528.32 130.7V460.3C2528.32 472.41 2538.17 482.25 2550.28 482.25H2559.8C2547.69 482.26 2537.84 472.41 2537.84 460.3Z"
                          fill="white"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <path
              d="M3037.79 129.56C3037.79 116.98 3027 106.78 3013.68 106.78H2542.9C2529.58 106.78 2518.79 116.98 2518.79 129.56V167.32H3037.78V129.56H3037.79Z"
              fill="#E0E0E0"
            />
            <path
              d="M3037.79 176.84H2518.8C2513.54 176.84 2509.28 172.57 2509.28 167.32V129.56C2509.28 111.75 2524.37 97.25 2542.91 97.25H3013.68C3032.22 97.25 3047.31 111.74 3047.31 129.56V167.32C3047.31 172.58 3043.05 176.84 3037.79 176.84ZM2528.31 157.8H3028.26V129.56C3028.26 122.25 3021.71 116.3 3013.67 116.3H2542.9C2534.86 116.3 2528.31 122.25 2528.31 129.56V157.8Z"
              fill="#1E2128"
            />
            <path
              className="a-one"
              d="M2760.22 220.38H2572.99C2568.85 220.38 2565.49 217.02 2565.49 212.88C2565.49 208.74 2568.85 205.38 2572.99 205.38H2760.22C2764.36 205.38 2767.72 208.74 2767.72 212.88C2767.72 217.02 2764.36 220.38 2760.22 220.38Z"
              fill="#14E956"
            />
            <path
              className="a-two"
              d="M2686.32 267.34H2572.99C2568.85 267.34 2565.49 263.98 2565.49 259.84C2565.49 255.7 2568.85 252.34 2572.99 252.34H2686.32C2690.46 252.34 2693.82 255.7 2693.82 259.84C2693.82 263.98 2690.46 267.34 2686.32 267.34Z"
              fill="#F75C4C"
            />
            <path
              className="a-three"
              d="M2957.31 267.34H2727.38C2723.24 267.34 2719.88 263.98 2719.88 259.84C2719.88 255.7 2723.24 252.34 2727.38 252.34H2957.31C2961.45 252.34 2964.81 255.7 2964.81 259.84C2964.81 263.98 2961.45 267.34 2957.31 267.34Z"
              fill="#EEF7FB"
            />
            <path
              className="a-four"
              d="M2799.64 311.92H2572.99C2568.85 311.92 2565.49 308.56 2565.49 304.42C2565.49 300.28 2568.85 296.92 2572.99 296.92H2799.64C2803.78 296.92 2807.14 300.28 2807.14 304.42C2807.14 308.56 2803.78 311.92 2799.64 311.92Z"
              fill="#14E956"
            />
            <path
              className="a-five"
              d="M2911.32 311.92H2839.05C2834.91 311.92 2831.55 308.56 2831.55 304.42C2831.55 300.28 2834.91 296.92 2839.05 296.92H2911.32C2915.46 296.92 2918.82 300.28 2918.82 304.42C2918.82 308.56 2915.46 311.92 2911.32 311.92Z"
              fill="#FFEB3B"
            />
            <path
              className="a-six"
              d="M2878.48 354.76H2573C2568.86 354.76 2565.5 351.4 2565.5 347.26C2565.5 343.12 2568.86 339.76 2573 339.76H2878.48C2882.62 339.76 2885.98 343.12 2885.98 347.26C2885.98 351.4 2882.62 354.76 2878.48 354.76Z"
              fill="#EEF7FB"
            />
            <path
              className="a-seven"
              d="M2681.39 398.7H2572.99C2568.85 398.7 2565.49 395.34 2565.49 391.2C2565.49 387.06 2568.85 383.7 2572.99 383.7H2681.39C2685.53 383.7 2688.89 387.06 2688.89 391.2C2688.89 395.34 2685.53 398.7 2681.39 398.7Z"
              fill="#BA68C8"
            />
            <path
              className="a-eight"
              d="M2931.03 398.7H2724.09C2719.95 398.7 2716.59 395.34 2716.59 391.2C2716.59 387.06 2719.95 383.7 2724.09 383.7H2931.03C2935.17 383.7 2938.53 387.06 2938.53 391.2C2938.53 395.34 2935.18 398.7 2931.03 398.7Z"
              fill="#14E956"
            />
            <path
              className="a-nine"
              d="M2825.92 447.39H2573C2568.86 447.39 2565.5 444.03 2565.5 439.89C2565.5 435.75 2568.86 432.39 2573 432.39H2825.92C2830.06 432.39 2833.42 435.75 2833.42 439.89C2833.42 444.04 2830.06 447.39 2825.92 447.39Z"
              fill="#EEF7FB"
            />
            <path
              className="b-one"
              d="M2573.76 144.13C2578.2 144.13 2581.8 140.53 2581.8 136.09C2581.8 131.65 2578.2 128.05 2573.76 128.05C2569.32 128.05 2565.72 131.65 2565.72 136.09C2565.72 140.53 2569.32 144.13 2573.76 144.13Z"
              fill="#1E2128"
            />
            <path
              className="b-two"
              d="M2602.34 144.13C2606.78 144.13 2610.38 140.53 2610.38 136.09C2610.38 131.65 2606.78 128.05 2602.34 128.05C2597.9 128.05 2594.3 131.65 2594.3 136.09C2594.3 140.53 2597.9 144.13 2602.34 144.13Z"
              fill="#1E2128"
            />
            <path
              className="b-three"
              d="M2630.92 144.13C2635.36 144.13 2638.96 140.53 2638.96 136.09C2638.96 131.65 2635.36 128.05 2630.92 128.05C2626.48 128.05 2622.88 131.65 2622.88 136.09C2622.88 140.53 2626.48 144.13 2630.92 144.13Z"
              fill="#1E2128"
            />
            <g opacity="0.5">
              <g opacity="0.5">
                <g opacity="0.5">
                  <g opacity="0.5">
                    <g opacity="0.5">
                      <g opacity="0.5">
                        <path
                          opacity="0.5"
                          d="M2873.82 49.4675L2812.29 0.355713L2669.72 178.99L2731.25 228.102L2873.82 49.4675Z"
                          fill="white"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g opacity="0.5">
              <g opacity="0.5">
                <g opacity="0.5">
                  <g opacity="0.5">
                    <g opacity="0.5">
                      <g opacity="0.5">
                        <path
                          opacity="0.5"
                          d="M2986.99 30.5408L2955.14 5.11475L2812.57 183.749L2844.42 209.176L2986.99 30.5408Z"
                          fill="white"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g opacity="0.2">
              <g opacity="0.2">
                <g opacity="0.2">
                  <g opacity="0.2">
                    <g opacity="0.2">
                      <g opacity="0.2">
                        <path
                          opacity="0.2"
                          d="M3025.9 109.13C3025.9 109.13 2841.37 480.49 2521.88 466.82L2538.14 493.24H3013.71L3038.1 470.88L3038.05 131.74L3025.9 109.13Z"
                          fill="#1E2128"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <path
              d="M2746.13 1808H2489.23L2449.06 1366.99H2786.3L2746.13 1808Z"
              fill="#FEF5E7"
            />
            <path
              d="M2746.13 1821.56H2489.23C2482.21 1821.56 2476.36 1816.21 2475.72 1809.23L2435.55 1368.22C2435.2 1364.42 2436.47 1360.66 2439.04 1357.84C2441.61 1355.02 2445.24 1353.42 2449.05 1353.42H2786.3C2790.11 1353.42 2793.75 1355.02 2796.31 1357.84C2798.88 1360.65 2800.15 1364.42 2799.8 1368.22L2759.62 1809.23C2759 1816.21 2753.14 1821.56 2746.13 1821.56ZM2501.61 1794.44H2733.74L2771.45 1380.56H2463.91L2501.61 1794.44Z"
              fill="#1E2128"
            />
            <g opacity="0.4">
              <g opacity="0.4">
                <g opacity="0.4">
                  <g opacity="0.4">
                    <g opacity="0.4">
                      <g opacity="0.4">
                        <path
                          opacity="0.4"
                          d="M2463.91 1380.55L2501.61 1794.44H2528.74L2491.04 1380.55H2463.91Z"
                          fill="white"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <path
              d="M2822.72 1464.01H2433.88V1688.15H2822.72V1464.01Z"
              fill="#BE8C6B"
            />
            <path
              d="M2822.72 1698.15H2433.88C2428.36 1698.15 2423.88 1693.67 2423.88 1688.15V1464.01C2423.88 1458.49 2428.36 1454.01 2433.88 1454.01H2822.72C2828.24 1454.01 2832.72 1458.49 2832.72 1464.01V1688.15C2832.72 1693.67 2828.25 1698.15 2822.72 1698.15ZM2443.89 1678.15H2812.73V1474.01H2443.89V1678.15Z"
              fill="#1E2128"
            />
            <g opacity="0.5">
              <g opacity="0.5">
                <g opacity="0.5">
                  <g opacity="0.5">
                    <g opacity="0.5">
                      <g opacity="0.5">
                        <path
                          opacity="0.5"
                          d="M2490.9 1676.85H2518.03L2499.67 1475.31H2472.54L2490.9 1676.85Z"
                          fill="white"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g className="c-tween">
              <path
                d="M2572.4 1608.63C2572.52 1608.59 2572.64 1608.49 2572.76 1608.49C2573.81 1608.37 2579.01 1605.63 2584.17 1601.71C2589.49 1597.78 2595.36 1592.65 2599.82 1587.66C2601.51 1585.77 2602.98 1583.89 2604.15 1582.18C2608.26 1576.09 2609.84 1569.44 2611.87 1561.7C2613.91 1554.06 2616.48 1545.3 2623.49 1536.7C2623.78 1536.34 2624.13 1535.92 2624.5 1535.47C2630.18 1529.14 2636.75 1526.54 2642.49 1523.95C2644.96 1522.82 2647.35 1521.69 2649.69 1520.35C2644.43 1517.77 2638.33 1516.69 2631.88 1517.06C2616.72 1517.92 2599.47 1526.64 2585.88 1541.88C2566.15 1564.02 2560.91 1592.22 2572.4 1608.63Z"
                fill="#1E2128"
              />
              <path
                d="M2668.8 1578.39C2669.78 1575.48 2670.55 1572.62 2671.1 1569.77C2671.82 1566.04 2672.14 1562.37 2672.06 1558.84C2671.85 1549.69 2668.97 1541.52 2663.27 1535.52C2658.89 1538.59 2654.61 1540.6 2650.89 1542.26C2644.82 1544.93 2640.38 1546.91 2636.91 1550.83C2636.73 1551.03 2636.53 1551.29 2636.27 1551.61C2630.91 1558.2 2628.87 1564.76 2626.88 1572.21C2624.92 1579.6 2623.15 1587.87 2617.53 1596.22C2615.99 1598.51 2614.17 1600.78 2612.19 1603C2606.98 1608.84 2600.6 1614.37 2594.69 1618.7C2591.12 1621.29 2587.93 1623.39 2584.98 1624.98C2591.01 1629.19 2598.48 1630.96 2606.57 1630.5C2621.6 1629.65 2638.67 1621.06 2652.22 1606.04C2652.34 1605.91 2652.45 1605.78 2652.57 1605.68C2660.17 1597.18 2665.61 1587.7 2668.8 1578.39Z"
                fill="#1E2128"
              />{" "}
            </g>
            <path
              d="M2814.32 1385.67H2421.04V1379.38C2421.04 1354.2 2441.45 1333.78 2466.64 1333.78H2768.73C2793.91 1333.78 2814.33 1354.19 2814.33 1379.38V1385.67H2814.32Z"
              fill="#707070"
            />
            <path
              d="M2814.32 1399.23H2421.04C2413.55 1399.23 2407.48 1393.16 2407.48 1385.67V1379.38C2407.48 1346.76 2434.02 1320.22 2466.64 1320.22H2768.73C2801.35 1320.22 2827.89 1346.76 2827.89 1379.38V1385.67C2827.89 1393.16 2821.81 1399.23 2814.32 1399.23ZM2435.44 1372.1H2799.92C2796.62 1357.93 2783.88 1347.35 2768.72 1347.35H2466.63C2451.47 1347.35 2438.74 1357.93 2435.44 1372.1Z"
              fill="#1E2128"
            />
            <g opacity="0.5">
              <g opacity="0.5">
                <g opacity="0.5">
                  <g opacity="0.5">
                    <g opacity="0.5">
                      <g opacity="0.5">
                        <path
                          opacity="0.5"
                          d="M2475.68 1356.39H2777.77C2784.36 1356.39 2790.42 1358.48 2795.52 1361.9C2789.79 1353.16 2779.94 1347.35 2768.73 1347.35H2466.64C2451.48 1347.35 2438.74 1357.94 2435.44 1372.11H2448.2C2453.79 1362.72 2463.99 1356.39 2475.68 1356.39Z"
                          fill="white"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <path
              d="M2468.77 1333.78H2766.58V1315.93C2766.58 1301.29 2755.05 1289.25 2740.43 1288.61L2497.3 1278.02C2481.75 1277.34 2468.77 1289.77 2468.77 1305.34V1333.78V1333.78Z"
              fill="#707070"
            />
            <path
              d="M2766.59 1347.35H2468.78C2461.29 1347.35 2455.22 1341.28 2455.22 1333.79V1305.35C2455.22 1294.09 2459.7 1283.59 2467.84 1275.81C2475.97 1268.02 2486.59 1263.97 2497.91 1264.49L2741.04 1275.08C2762.98 1276.04 2780.17 1293.99 2780.17 1315.95V1333.8C2780.15 1341.27 2774.08 1347.35 2766.59 1347.35ZM2482.34 1320.22H2753.02V1315.93C2753.02 1308.53 2747.23 1302.49 2739.84 1302.17L2496.71 1291.58C2492.92 1291.4 2489.32 1292.77 2486.58 1295.39C2483.84 1298.01 2482.33 1301.55 2482.33 1305.34V1320.22H2482.34Z"
              fill="#1E2128"
            />
            <g opacity="0.5">
              <g opacity="0.5">
                <g opacity="0.5">
                  <g opacity="0.5">
                    <g opacity="0.5">
                      <g opacity="0.5">
                        <path
                          opacity="0.5"
                          d="M2491.38 1309.86C2491.38 1306.07 2492.89 1302.53 2495.63 1299.91C2498.37 1297.28 2501.95 1295.9 2505.76 1296.1L2748.89 1306.69C2749.1 1306.7 2749.3 1306.76 2749.51 1306.78C2747.12 1304.1 2743.72 1302.34 2739.85 1302.17L2496.72 1291.58C2492.91 1291.39 2489.33 1292.77 2486.59 1295.39C2483.85 1298.01 2482.34 1301.55 2482.34 1305.34V1320.22H2491.38V1309.86Z"
                          fill="white"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g opacity="0.3">
              <g opacity="0.3">
                <g opacity="0.3">
                  <g opacity="0.3">
                    <g opacity="0.3">
                      <g opacity="0.3">
                        <path
                          opacity="0.3"
                          d="M2464.91 1391.53L2466.16 1405.27L2662.36 1412.04C2695.92 1413.2 2720.75 1443.62 2715.17 1476.74C2697.74 1580.16 2645.72 1776.59 2501.11 1788.96L2501.61 1794.44H2724.7L2761.4 1391.53H2464.91Z"
                          fill="#1E2128"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g opacity="0.3">
              <g opacity="0.3">
                <g opacity="0.3">
                  <g opacity="0.3">
                    <g opacity="0.3">
                      <g opacity="0.3">
                        <path
                          opacity="0.3"
                          d="M3077.5 2318H92.5C41.41 2318 0 2276.59 0 2225.5C0 2174.41 41.41 2133 92.5 2133H3077.5C3128.59 2133 3170 2174.41 3170 2225.5C3170 2276.59 3128.59 2318 3077.5 2318Z"
                          fill="#1E2128"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <path
              d="M807.32 1034.91C790.71 1034.91 775.84 1026.32 767.53 1011.94L730.85 948.4L637.28 948.39C599.66 948.17 569.13 919.97 569.13 885.54V715.78C569.13 681.12 599.86 652.92 637.64 652.92H977.02C1014.8 652.92 1045.53 681.12 1045.53 715.78V885.54C1045.53 920.21 1014.8 948.41 977.02 948.41H883.8L847.12 1011.95C838.8 1026.32 823.93 1034.91 807.32 1034.91Z"
              fill="#1E2128"
            />
            <path
              d="M977.01 668.79C1006.08 668.79 1029.64 689.83 1029.64 715.78V885.54C1029.64 911.49 1006.08 932.53 977.01 932.53H874.62L864.81 949.52L833.35 1004.01C827.56 1014.03 817.44 1019.04 807.31 1019.04C797.18 1019.04 787.06 1014.03 781.27 1004.01L749.81 949.52L740 932.53L637.26 932.52C608.36 932.35 584.98 911.39 584.98 885.55V715.79C584.98 689.84 608.54 668.8 637.61 668.8H977.01V668.79ZM977.01 637.04H637.63C591.1 637.04 553.24 672.36 553.24 715.78V885.54C553.24 928.68 590.85 963.99 637.09 964.27L721.68 964.28L722.33 965.4L753.79 1019.88C764.96 1039.23 784.97 1050.79 807.33 1050.79C829.68 1050.79 849.69 1039.23 860.87 1019.88L892.33 965.39L892.97 964.28H977.02C1023.55 964.28 1061.41 928.96 1061.41 885.54V715.78C1061.39 672.36 1023.54 637.04 977.01 637.04Z"
              fill="#34A958"
            />
            <path
              d="M756.26 857.53C753.75 857.53 751.23 856.59 749.28 854.7L697.83 804.63C695.9 802.75 694.81 800.16 694.81 797.46C694.81 794.76 695.9 792.18 697.83 790.29L745.96 743.44C749.92 739.59 756.25 739.67 760.1 743.63C763.95 747.59 763.87 753.92 759.91 757.77L719.15 797.45L763.23 840.36C767.19 844.21 767.27 850.54 763.42 854.5C761.47 856.52 758.87 857.53 756.26 857.53Z"
              fill="white"
            />
            <path
              d="M858.37 857.53C855.77 857.53 853.16 856.52 851.2 854.51C847.35 850.55 847.43 844.22 851.39 840.37L895.47 797.46L854.71 757.78C850.75 753.93 850.67 747.6 854.52 743.64C858.37 739.68 864.71 739.6 868.66 743.45L916.79 790.3C918.72 792.18 919.81 794.77 919.81 797.47C919.81 800.17 918.72 802.75 916.79 804.64L865.34 854.71C863.41 856.59 860.89 857.53 858.37 857.53Z"
              fill="white"
            />
            <path
              d="M788.24 884.46C787.39 884.46 786.53 884.35 785.68 884.13C780.34 882.72 777.15 877.25 778.57 871.91L818.4 721.15C819.81 715.81 825.3 712.62 830.62 714.04C835.96 715.45 839.15 720.92 837.73 726.26L797.9 877.02C796.72 881.49 792.67 884.46 788.24 884.46Z"
              fill="white"
            />
            <g opacity="0.6">
              <g opacity="0.6">
                <g opacity="0.6">
                  <g opacity="0.6">
                    <g opacity="0.6">
                      <g opacity="0.6">
                        <g opacity="0.6">
                          <path
                            opacity="0.6"
                            d="M2617.1 1196.63C2612.96 1196.63 2609.6 1193.27 2609.6 1189.13V1178.67C2609.6 1169.05 2601.77 1161.22 2592.15 1161.22H2501.62C2482.21 1161.22 2466.41 1145.42 2466.41 1126.01C2466.41 1106.6 2482.21 1090.8 2501.62 1090.8H2711.79C2720.45 1090.8 2727.49 1083.75 2727.49 1075.09C2727.49 1066.43 2720.44 1059.39 2711.79 1059.39H2537.04C2532.9 1059.39 2529.54 1056.03 2529.54 1051.89C2529.54 1047.75 2532.9 1044.39 2537.04 1044.39H2711.79C2728.72 1044.39 2742.49 1058.16 2742.49 1075.09C2742.49 1092.02 2728.72 1105.8 2711.79 1105.8H2501.62C2490.48 1105.8 2481.41 1114.87 2481.41 1126.01C2481.41 1137.16 2490.48 1146.22 2501.62 1146.22H2592.15C2610.04 1146.22 2624.6 1160.78 2624.6 1178.67V1189.13C2624.6 1193.27 2621.24 1196.63 2617.1 1196.63Z"
                            fill="#FFFAFA"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g opacity="0.6">
                <g opacity="0.6">
                  <g opacity="0.6">
                    <g opacity="0.6">
                      <g opacity="0.6">
                        <g opacity="0.6">
                          <path
                            opacity="0.6"
                            d="M2500.2 1059.38H2473.8C2469.66 1059.38 2466.3 1056.02 2466.3 1051.88C2466.3 1047.74 2469.66 1044.38 2473.8 1044.38H2500.2C2504.34 1044.38 2507.7 1047.74 2507.7 1051.88C2507.7 1056.02 2504.34 1059.38 2500.2 1059.38Z"
                            fill="#FFFAFA"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g opacity="0.6">
                <g opacity="0.6">
                  <g opacity="0.6">
                    <g opacity="0.6">
                      <g opacity="0.6">
                        <g opacity="0.6">
                          <path
                            opacity="0.6"
                            d="M2550.35 1011.87H2425.88C2421.74 1011.87 2418.38 1008.51 2418.38 1004.37C2418.38 1000.23 2421.74 996.87 2425.88 996.87H2550.35C2554.49 996.87 2557.85 1000.23 2557.85 1004.37C2557.85 1008.51 2554.49 1011.87 2550.35 1011.87Z"
                            fill="#FFFAFA"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g opacity="0.2">
              <g opacity="0.2">
                <g opacity="0.2">
                  <g opacity="0.2">
                    <g opacity="0.2">
                      <g opacity="0.2">
                        <path
                          opacity="0.2"
                          d="M977.01 668.79H942.01C971.08 668.79 994.64 689.83 994.64 715.78V775.32C980 893 894.3 906.07 856.01 924.97C845.12 930.35 836.02 938.77 829.94 949.29L829.81 949.51L798.35 1004C796.09 1007.92 793.15 1011.05 789.81 1013.43C803.51 1023.24 824.04 1020.12 833.35 1004L862.51 953.5L992.5 940.5L1000.2 927.67C1017.62 920.01 1029.64 904.05 1029.64 885.54V715.78C1029.64 689.83 1006.07 668.79 977.01 668.79Z"
                          fill="#1E2128"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div className="tooling hidden">
        <div className="tooling-title">
          <h2>Software Engineering Tech Stack</h2>
        </div>
        <div className="tooling-box">
          {SoftwareEngineeringTechStackData.map((item, index) => (
            <div key={index} className="box-content">
              <div className="box-icon">
                <item.imgComponent className="icon" />
              </div>
              <div className="box-text">
                {Array.isArray(item.text) ? (
                  item.text.map((text, i) => <p key={i}>{text}</p>)
                ) : (
                  <p>{item.text}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="tooling hidden">
        <div className="tooling-title">
          <h2>Data Science Tech Stack</h2>
        </div>
        <div className="tooling-box">
          {DataScienceTechStackData.map((item, index) => (
            <div key={index} className="box-content">
              <div className="box-icon">
                <item.imgComponent className="icon" />
              </div>
              <div className="box-text">
                {Array.isArray(item.text) ? (
                  item.text.map((text, i) => <p key={i}>{text}</p>)
                ) : (
                  <p>{item.text}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="tooling hidden">
        <div className="tooling-title">
          <h2>Mathematics</h2>
        </div>
        <div className="tooling-box">
          {MathematicsData.map((item, index) => (
            item.url ? (
            <a href={item.url} className="box-content box-content-maths box-content-link">
              <div key={index}>
              <div className="box-text">
                {
                 Array.isArray(item.text) ? (
                  item.text.map((text, i) => <p key={i}>{text}</p>)
                ) : (
                  <p>{item.text}</p>
                )
                }
                
              </div>
              </div>
              </a>)
              :
              (<div key={index} className="box-content box-content-maths">
              <div className="box-text">
                {
                 Array.isArray(item.text) ? (
                  item.text.map((text, i) => <p key={i}>{text}</p>)
                ) : (
                  <p>{item.text}</p>
                )
                }
                
              </div>
              </div>)
              
          ))}
        </div>
      </div>
      <div className="showroom-section hidden">
        <div className="showroom-title">
          <h2>Showroom</h2>
        </div>
        <div className="showroom">
          <div className="showroom-background" style={Styles}></div>
          <ProjectSlider setBackground={setBackground} />
        </div>
        <div class="button-wrap">
          <button class="butt" onClick={nav}>
            All Project details
          </button>
        </div>
      </div>
      <div className="featured hidden">
        <div className="featured-title">
          <h2>Education</h2>
        </div>
        <div className="featured-box">
          <div className="article">
            <div className="top">
              <p>
                 2018-2022
              </p>
            </div>
            <div className="bottom">
              <h4>
                <p>
              Hong Kong University of Science and Technology
              </p>
              <p>{"Triple Majors in Data Science, Computer Science and Mathematics(Applied)"}</p>
              </h4>
              <div className="info">
                <p>Sept 15, 2022</p>
                <a
                  href="https://drive.google.com/file/d/1zq2mZ5e2JFVV-rnQiedgimXLkJZ3rYmj/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="35"
                    height="24"
                    viewBox="0 0 45 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M44.4481 13.7591L31.2866 0.548391C30.9325 0.208882 30.4595 0.0214931 29.969 0.0263367C29.4784 0.0311803 29.0092 0.227871 28.6619 0.574307C28.3145 0.920742 28.1166 1.38939 28.1105 1.87994C28.1043 2.37048 28.2904 2.84394 28.629 3.19897L38.5212 13.1263H1.8772C1.62149 13.1106 1.36528 13.1475 1.12434 13.2346C0.883402 13.3216 0.662838 13.4571 0.476227 13.6326C0.289616 13.8081 0.140908 14.02 0.0392584 14.2552C-0.062391 14.4903 -0.11483 14.7438 -0.11483 15C-0.11483 15.2562 -0.062391 15.5097 0.0392584 15.7448C0.140908 15.98 0.289616 16.1918 0.476227 16.3674C0.662838 16.5429 0.883402 16.6784 1.12434 16.7654C1.36528 16.8525 1.62149 16.8894 1.8772 16.8737H38.6689L28.636 26.794C28.4452 26.9637 28.2909 27.1705 28.1828 27.4018C28.0746 27.6332 28.0147 27.8841 28.0069 28.1394C27.9991 28.3947 28.0434 28.6488 28.1372 28.8864C28.231 29.1239 28.3722 29.3398 28.5523 29.5209C28.7324 29.7019 28.9476 29.8443 29.1846 29.9394C29.4216 30.0344 29.6756 30.0801 29.9309 30.0736C30.1862 30.0671 30.4375 30.0086 30.6694 29.9017C30.9013 29.7947 31.1089 29.6416 31.2796 29.4516L44.4411 16.4167C44.6158 16.2423 44.7544 16.0352 44.849 15.8072C44.9436 15.5792 44.9923 15.3347 44.9923 15.0879C44.9923 14.841 44.9436 14.5966 44.849 14.3686C44.7544 14.1406 44.6158 13.9334 44.4411 13.7591H44.4481Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="quote hidden">
        <div className="quote-body">
          <QuoteLeft className="left" />
          <div className="quote-body-content">
            <p>
              There's no nobility in playing small. Be different<span>!</span>
            </p>
          </div>
          <QuoteRight className="right" />
        </div>
      </div>
    </div>
  );
}

export default Home;

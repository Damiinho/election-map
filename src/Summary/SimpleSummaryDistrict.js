import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../contexts/DataContext";
import MySmallInfoBox from "../Components/MySmallInfoBox";
import MyBar from "../Components/MyBar";
import { AppContext } from "../contexts/AppContext";

const SimpleSummaryDistrict = (props) => {
  const { simpleDistricts, setSimpleDistricts } = useContext(DataContext);
  const { correction } = useContext(AppContext);

  const totalMandates = props.district.deputies;

  // Funkcja do przydzielania mandatów
  const distributeSeats = (parties, totalSeats) => {
    // Filtruj partie, aby uwzględniać tylko te, które mają isOverThreshold === true

    let partiesWithCorrection = parties.map((party) => ({ ...party }));

    if (correction) {
      if (props.district.id === "dl") {
        partiesWithCorrection[0].result =
          partiesWithCorrection[0].result * 0.9727001605872906;
        partiesWithCorrection[1].result =
          partiesWithCorrection[1].result * 0.9131386861313869;
        partiesWithCorrection[2].result =
          partiesWithCorrection[2].result * 0.8590308370044053;
        partiesWithCorrection[3].result =
          partiesWithCorrection[3].result * 0.8385964912280701;
        partiesWithCorrection[4].result =
          partiesWithCorrection[4].result * 1.3081210191082802;
        partiesWithCorrection[5].result =
          partiesWithCorrection[5].result * 1.8139534883720931;
      }
      if (props.district.id === "db") {
        partiesWithCorrection[0].result =
          partiesWithCorrection[0].result * 0.9300298233539802;
        partiesWithCorrection[1].result =
          partiesWithCorrection[1].result * 1.171167883211679;
        partiesWithCorrection[2].result =
          partiesWithCorrection[2].result * 0.7958883994126286;
        partiesWithCorrection[3].result =
          partiesWithCorrection[3].result * 0.8479532163742689;
        partiesWithCorrection[4].result =
          partiesWithCorrection[4].result * 0.98328025477707;
        partiesWithCorrection[5].result =
          partiesWithCorrection[5].result * 1.3604651162790697;
      }
      if (props.district.id === "dw") {
        partiesWithCorrection[0].result =
          partiesWithCorrection[0].result * 0.7953659096122964;
        partiesWithCorrection[1].result =
          partiesWithCorrection[1].result * 1.1970802919708028;
        partiesWithCorrection[2].result =
          partiesWithCorrection[2].result * 1.0939794419970632;
        partiesWithCorrection[3].result =
          partiesWithCorrection[3].result * 0.7555555555555555;
        partiesWithCorrection[4].result =
          partiesWithCorrection[4].result * 1.2269108280254777;
        partiesWithCorrection[5].result =
          partiesWithCorrection[5].result * 1.8662790697674418;
      }
      if (props.district.id === "cb") {
        partiesWithCorrection[0].result =
          partiesWithCorrection[0].result * 0.8357421426932782;
        partiesWithCorrection[1].result =
          partiesWithCorrection[1].result * 1.133211678832117;
        partiesWithCorrection[2].result =
          partiesWithCorrection[2].result * 1.0352422907488987;
        partiesWithCorrection[3].result =
          partiesWithCorrection[3].result * 1.054970760233918;
        partiesWithCorrection[4].result =
          partiesWithCorrection[4].result * 1.2078025477707006;
        partiesWithCorrection[5].result =
          partiesWithCorrection[5].result * 0.75;
      }
      if (props.district.id === "ct") {
        partiesWithCorrection[0].result =
          partiesWithCorrection[0].result * 0.9263592567102547;
        partiesWithCorrection[1].result =
          partiesWithCorrection[1].result * 0.9642335766423359;
        partiesWithCorrection[2].result =
          partiesWithCorrection[2].result * 0.9295154185022028;
        partiesWithCorrection[3].result =
          partiesWithCorrection[3].result * 1.2725146198830408;
        partiesWithCorrection[4].result =
          partiesWithCorrection[4].result * 1.180732484076433;
        partiesWithCorrection[5].result =
          partiesWithCorrection[5].result * 0.6744186046511628;
      }
      if (props.district.id === "lu") {
        partiesWithCorrection[0].result =
          partiesWithCorrection[0].result * 1.2707042899747647;
        partiesWithCorrection[1].result =
          partiesWithCorrection[1].result * 0.7043795620437957;
        partiesWithCorrection[2].result =
          partiesWithCorrection[2].result * 1.038179148311307;
        partiesWithCorrection[3].result =
          partiesWithCorrection[3].result * 1.0643274853801168;
        partiesWithCorrection[4].result =
          partiesWithCorrection[4].result * 0.6218152866242037;
        partiesWithCorrection[5].result =
          partiesWithCorrection[5].result * 0.7674418604651163;
      }
      if (props.district.id === "lc") {
        partiesWithCorrection[0].result =
          partiesWithCorrection[0].result * 1.3649919706354667;
        partiesWithCorrection[1].result =
          partiesWithCorrection[1].result * 0.5401459854014599;
        partiesWithCorrection[2].result =
          partiesWithCorrection[2].result * 0.8575624082232012;
        partiesWithCorrection[3].result =
          partiesWithCorrection[3].result * 1.3871345029239763;
        partiesWithCorrection[4].result =
          partiesWithCorrection[4].result * 0.5437898089171974;
        partiesWithCorrection[5].result =
          partiesWithCorrection[5].result * 0.6744186046511628;
      }
      if (props.district.id === "fz") {
        partiesWithCorrection[0].result =
          partiesWithCorrection[0].result * 0.7868777242486807;
        partiesWithCorrection[1].result =
          partiesWithCorrection[1].result * 1.1412408759124089;
        partiesWithCorrection[2].result =
          partiesWithCorrection[2].result * 1.0558002936857565;
        partiesWithCorrection[3].result =
          partiesWithCorrection[3].result * 1.360233918128655;
        partiesWithCorrection[4].result =
          partiesWithCorrection[4].result * 1.2428343949044585;
        partiesWithCorrection[5].result = partiesWithCorrection[5].result * 1;
      }
      if (props.district.id === "el") {
        partiesWithCorrection[0].result =
          partiesWithCorrection[0].result * 0.7547602661160816;
        partiesWithCorrection[1].result =
          partiesWithCorrection[1].result * 1.3072992700729928;
        partiesWithCorrection[2].result =
          partiesWithCorrection[2].result * 0.9765051395007344;
        partiesWithCorrection[3].result =
          partiesWithCorrection[3].result * 0.5298245614035088;
        partiesWithCorrection[4].result =
          partiesWithCorrection[4].result * 1.6003184713375798;
        partiesWithCorrection[5].result = partiesWithCorrection[5].result * 1;
      }
      if (props.district.id === "ep") {
        partiesWithCorrection[0].result =
          partiesWithCorrection[0].result * 1.2895159440238586;
        partiesWithCorrection[1].result =
          partiesWithCorrection[1].result * 0.5708029197080292;
        partiesWithCorrection[2].result =
          partiesWithCorrection[2].result * 0.9926578560939795;
        partiesWithCorrection[3].result =
          partiesWithCorrection[3].result * 1.2210526315789472;
        partiesWithCorrection[4].result =
          partiesWithCorrection[4].result * 0.8718152866242037;
        partiesWithCorrection[5].result = partiesWithCorrection[5].result * 1;
      }
      if (props.district.id === "esi") {
        partiesWithCorrection[0].result =
          partiesWithCorrection[0].result * 1.1426932782748336;
        partiesWithCorrection[1].result =
          partiesWithCorrection[1].result * 0.7474452554744526;
        partiesWithCorrection[2].result =
          partiesWithCorrection[2].result * 0.8634361233480177;
        partiesWithCorrection[3].result =
          partiesWithCorrection[3].result * 1.2035087719298243;
        partiesWithCorrection[4].result =
          partiesWithCorrection[4].result * 0.9069767441860466;
        partiesWithCorrection[5].result = partiesWithCorrection[5].result * 1;
      }
      if (props.district.id === "kch") {
        partiesWithCorrection[0].result =
          partiesWithCorrection[0].result * 1.22688690066529;
        partiesWithCorrection[1].result =
          partiesWithCorrection[1].result * 0.8408759124087591;
        partiesWithCorrection[2].result =
          partiesWithCorrection[2].result * 1.0367107195301029;
        partiesWithCorrection[3].result =
          partiesWithCorrection[3].result * 0.9239766081871345;
        partiesWithCorrection[4].result =
          partiesWithCorrection[4].result * 0.6775477707006369;
        partiesWithCorrection[5].result = partiesWithCorrection[5].result * 1;
      }
      if (props.district.id === "kr") {
        partiesWithCorrection[0].result =
          partiesWithCorrection[0].result * 0.9075476026611607;
        partiesWithCorrection[1].result =
          partiesWithCorrection[1].result * 1.1124087591240877;
        partiesWithCorrection[2].result =
          partiesWithCorrection[2].result * 1.1732745961820852;
        partiesWithCorrection[3].result =
          partiesWithCorrection[3].result * 0.8502923976608185;
        partiesWithCorrection[4].result =
          partiesWithCorrection[4].result * 1.035828025477707;
        partiesWithCorrection[5].result =
          partiesWithCorrection[5].result * 0.8255813953488372;
      }
      if (props.district.id === "kn") {
        partiesWithCorrection[0].result =
          partiesWithCorrection[0].result * 1.5095205322321632;
        partiesWithCorrection[1].result =
          partiesWithCorrection[1].result * 0.5047445255474453;
        partiesWithCorrection[2].result =
          partiesWithCorrection[2].result * 1.0205580029368577;
        partiesWithCorrection[3].result =
          partiesWithCorrection[3].result * 0.8596491228070174;
        partiesWithCorrection[4].result =
          partiesWithCorrection[4].result * 0.48328025477707004;
        partiesWithCorrection[5].result = partiesWithCorrection[5].result * 1;
      }
      if (props.district.id === "kt") {
        partiesWithCorrection[0].result =
          partiesWithCorrection[0].result * 1.3670566643725626;
        partiesWithCorrection[1].result =
          partiesWithCorrection[1].result * 0.5109489051094891;
        partiesWithCorrection[2].result =
          partiesWithCorrection[2].result * 1.0440528634361235;
        partiesWithCorrection[3].result =
          partiesWithCorrection[3].result * 1.5614035087719296;
        partiesWithCorrection[4].result =
          partiesWithCorrection[4].result * 0.4729299363057325;
        partiesWithCorrection[5].result = partiesWithCorrection[5].result * 1;
      }
      if (props.district.id === "wp") {
        partiesWithCorrection[0].result =
          partiesWithCorrection[0].result * 1.2032576278963065;
        partiesWithCorrection[1].result =
          partiesWithCorrection[1].result * 0.6149635036496351;
        partiesWithCorrection[2].result =
          partiesWithCorrection[2].result * 0.7694566813509546;
        partiesWithCorrection[3].result =
          partiesWithCorrection[3].result * 1.774269005847953;
        partiesWithCorrection[4].result =
          partiesWithCorrection[4].result * 0.697452229299363;
        partiesWithCorrection[5].result =
          partiesWithCorrection[5].result * 0.8895348837209303;
      }
      if (props.district.id === "wr") {
        partiesWithCorrection[0].result =
          partiesWithCorrection[0].result * 1.3264510208763476;
        partiesWithCorrection[1].result =
          partiesWithCorrection[1].result * 0.625912408759124;
        partiesWithCorrection[2].result =
          partiesWithCorrection[2].result * 0.8604992657856095;
        partiesWithCorrection[3].result =
          partiesWithCorrection[3].result * 1.1929824561403506;
        partiesWithCorrection[4].result =
          partiesWithCorrection[4].result * 0.5915605095541401;
        partiesWithCorrection[5].result =
          partiesWithCorrection[5].result * 0.4418604651162791;
      }
      if (props.district.id === "ws") {
        partiesWithCorrection[0].result =
          partiesWithCorrection[0].result * 1.3709566414315209;
        partiesWithCorrection[1].result =
          partiesWithCorrection[1].result * 0.5087591240875913;
        partiesWithCorrection[2].result =
          partiesWithCorrection[2].result * 0.9530102790014685;
        partiesWithCorrection[3].result =
          partiesWithCorrection[3].result * 1.3964912280701753;
        partiesWithCorrection[4].result =
          partiesWithCorrection[4].result * 0.5135350318471338;
        partiesWithCorrection[5].result =
          partiesWithCorrection[5].result * 0.6453488372093024;
      }
      if (props.district.id === "wa") {
        partiesWithCorrection[0].result =
          partiesWithCorrection[0].result * 0.6306492314751089;
        partiesWithCorrection[1].result =
          partiesWithCorrection[1].result * 1.5346715328467153;
        partiesWithCorrection[2].result =
          partiesWithCorrection[2].result * 1.102790014684288;
        partiesWithCorrection[3].result =
          partiesWithCorrection[3].result * 0.5555555555555555;
        partiesWithCorrection[4].result =
          partiesWithCorrection[4].result * 1.4482484076433122;
        partiesWithCorrection[5].result =
          partiesWithCorrection[5].result * 0.6453488372093024;
      }
      if (props.district.id === "wb") {
        partiesWithCorrection[0].result =
          partiesWithCorrection[0].result * 0.93805918788713;
        partiesWithCorrection[1].result =
          partiesWithCorrection[1].result * 1.0313868613138688;
        partiesWithCorrection[2].result =
          partiesWithCorrection[2].result * 0.973568281938326;
        partiesWithCorrection[3].result =
          partiesWithCorrection[3].result * 1.0058479532163742;
        partiesWithCorrection[4].result =
          partiesWithCorrection[4].result * 1.0421974522292994;
        partiesWithCorrection[5].result =
          partiesWithCorrection[5].result * 1.2732558139534884;
      }
      if (props.district.id === "op") {
        partiesWithCorrection[0].result =
          partiesWithCorrection[0].result * 0.8635008029364533;
        partiesWithCorrection[1].result =
          partiesWithCorrection[1].result * 0.9748175182481753;
        partiesWithCorrection[2].result =
          partiesWithCorrection[2].result * 0.8370044052863437;
        partiesWithCorrection[3].result =
          partiesWithCorrection[3].result * 1.2058479532163742;
        partiesWithCorrection[4].result =
          partiesWithCorrection[4].result * 0.9347133757961783;
        partiesWithCorrection[5].result = partiesWithCorrection[5].result * 1;
        partiesWithCorrection[7].result = 7.9;
      }
      if (props.district.id === "rk") {
        partiesWithCorrection[0].result =
          partiesWithCorrection[0].result * 1.4535443909153474;
        partiesWithCorrection[1].result =
          partiesWithCorrection[1].result * 0.5817518248175183;
        partiesWithCorrection[2].result = partiesWithCorrection[2].result * 1;
        partiesWithCorrection[3].result =
          partiesWithCorrection[3].result * 0.9181286549707601;
        partiesWithCorrection[4].result =
          partiesWithCorrection[4].result * 0.48089171974522293;
        partiesWithCorrection[5].result = partiesWithCorrection[5].result * 1;
      }
      if (props.district.id === "rz") {
        partiesWithCorrection[0].result =
          partiesWithCorrection[0].result * 1.4310621702225281;
        partiesWithCorrection[1].result =
          partiesWithCorrection[1].result * 0.5251824817518249;
        partiesWithCorrection[2].result =
          partiesWithCorrection[2].result * 1.2114537444933922;
        partiesWithCorrection[3].result =
          partiesWithCorrection[3].result * 0.9111111111111111;
        partiesWithCorrection[4].result =
          partiesWithCorrection[4].result * 0.5246815286624203;
        partiesWithCorrection[5].result = partiesWithCorrection[5].result * 1;
      }
      if (props.district.id === "bi") {
        partiesWithCorrection[0].result =
          partiesWithCorrection[0].result * 1.1938518008717596;
        partiesWithCorrection[1].result =
          partiesWithCorrection[1].result * 0.7678832116788321;
        partiesWithCorrection[2].result =
          partiesWithCorrection[2].result * 1.0220264317180616;
        partiesWithCorrection[3].result =
          partiesWithCorrection[3].result * 1.0912280701754384;
        partiesWithCorrection[4].result =
          partiesWithCorrection[4].result * 0.7237261146496815;
        partiesWithCorrection[5].result =
          partiesWithCorrection[5].result * 0.4476744186046512;
      }
      if (props.district.id === "gd") {
        partiesWithCorrection[0].result =
          partiesWithCorrection[0].result * 0.7364074328974535;
        partiesWithCorrection[1].result =
          partiesWithCorrection[1].result * 1.5076642335766426;
        partiesWithCorrection[2].result =
          partiesWithCorrection[2].result * 1.0587371512481645;
        partiesWithCorrection[3].result =
          partiesWithCorrection[3].result * 0.6900584795321637;
        partiesWithCorrection[4].result =
          partiesWithCorrection[4].result * 1.072452229299363;
        partiesWithCorrection[5].result = partiesWithCorrection[5].result * 1;
      }
      if (props.district.id === "gs") {
        partiesWithCorrection[0].result =
          partiesWithCorrection[0].result * 0.8357421426932782;
        partiesWithCorrection[1].result =
          partiesWithCorrection[1].result * 1.3083941605839418;
        partiesWithCorrection[2].result =
          partiesWithCorrection[2].result * 1.0719530102790016;
        partiesWithCorrection[3].result =
          partiesWithCorrection[3].result * 0.9286549707602338;
        partiesWithCorrection[4].result =
          partiesWithCorrection[4].result * 0.9928343949044586;
        partiesWithCorrection[5].result = partiesWithCorrection[5].result * 1;
      }
      if (props.district.id === "sb") {
        partiesWithCorrection[0].result =
          partiesWithCorrection[0].result * 1.072723101628814;
        partiesWithCorrection[1].result =
          partiesWithCorrection[1].result * 0.9927007299270073;
        partiesWithCorrection[2].result =
          partiesWithCorrection[2].result * 1.0895741556534508;
        partiesWithCorrection[3].result =
          partiesWithCorrection[3].result * 0.8339181286549707;
        partiesWithCorrection[4].result =
          partiesWithCorrection[4].result * 0.9140127388535032;
        partiesWithCorrection[5].result = partiesWithCorrection[5].result * 1;
      }
      if (props.district.id === "sc") {
        partiesWithCorrection[0].result =
          partiesWithCorrection[0].result * 1.0158293186510667;
        partiesWithCorrection[1].result =
          partiesWithCorrection[1].result * 0.8259124087591241;
        partiesWithCorrection[2].result =
          partiesWithCorrection[2].result * 0.8913362701908958;
        partiesWithCorrection[3].result =
          partiesWithCorrection[3].result * 1.015204678362573;
        partiesWithCorrection[4].result =
          partiesWithCorrection[4].result * 1.2412420382165605;
        partiesWithCorrection[5].result =
          partiesWithCorrection[5].result * 1.5988372093023255;
      }
      if (props.district.id === "sg") {
        partiesWithCorrection[0].result =
          partiesWithCorrection[0].result * 0.8660243175040147;
        partiesWithCorrection[1].result =
          partiesWithCorrection[1].result * 1.19014598540146;
        partiesWithCorrection[2].result =
          partiesWithCorrection[2].result * 1.1262848751835537;
        partiesWithCorrection[3].result =
          partiesWithCorrection[3].result * 0.7005847953216374;
        partiesWithCorrection[4].result =
          partiesWithCorrection[4].result * 1.0652866242038217;
        partiesWithCorrection[5].result =
          partiesWithCorrection[5].result * 1.5174418604651163;
      }
      if (props.district.id === "sr") {
        partiesWithCorrection[0].result =
          partiesWithCorrection[0].result * 1.1075934847442073;
        partiesWithCorrection[1].result =
          partiesWithCorrection[1].result * 1.0113138686131389;
        partiesWithCorrection[2].result =
          partiesWithCorrection[2].result * 1.052863436123348;
        partiesWithCorrection[3].result =
          partiesWithCorrection[3].result * 0.6596491228070175;
        partiesWithCorrection[4].result =
          partiesWithCorrection[4].result * 0.7707006369426751;
        partiesWithCorrection[5].result =
          partiesWithCorrection[5].result * 0.8953488372093024;
      }
      if (props.district.id === "sk") {
        partiesWithCorrection[0].result =
          partiesWithCorrection[0].result * 0.8990594172975452;
        partiesWithCorrection[1].result =
          partiesWithCorrection[1].result * 1.3576642335766425;
        partiesWithCorrection[2].result =
          partiesWithCorrection[2].result * 1.076358296622614;
        partiesWithCorrection[3].result =
          partiesWithCorrection[3].result * 0.5111111111111111;
        partiesWithCorrection[4].result =
          partiesWithCorrection[4].result * 0.9490445859872612;
        partiesWithCorrection[5].result = partiesWithCorrection[5].result * 1;
      }
      if (props.district.id === "so") {
        partiesWithCorrection[0].result =
          partiesWithCorrection[0].result * 0.8518008717595779;
        partiesWithCorrection[1].result =
          partiesWithCorrection[1].result * 1.0824817518248175;
        partiesWithCorrection[2].result =
          partiesWithCorrection[2].result * 0.947136563876652;
        partiesWithCorrection[3].result =
          partiesWithCorrection[3].result * 0.567251461988304;
        partiesWithCorrection[4].result =
          partiesWithCorrection[4].result * 1.7436305732484074;
        partiesWithCorrection[5].result = partiesWithCorrection[5].result * 1;
      }
      if (props.district.id === "tk") {
        partiesWithCorrection[0].result =
          partiesWithCorrection[0].result * 1.2658866712548749;
        partiesWithCorrection[1].result =
          partiesWithCorrection[1].result * 0.6076642335766423;
        partiesWithCorrection[2].result =
          partiesWithCorrection[2].result * 0.8737151248164465;
        partiesWithCorrection[3].result =
          partiesWithCorrection[3].result * 1.1555555555555554;
        partiesWithCorrection[4].result =
          partiesWithCorrection[4].result * 0.7921974522292993;
        partiesWithCorrection[5].result =
          partiesWithCorrection[5].result * 0.5523255813953488;
      }
      if (props.district.id === "ne") {
        partiesWithCorrection[0].result =
          partiesWithCorrection[0].result * 0.9373709566414314;
        partiesWithCorrection[1].result =
          partiesWithCorrection[1].result * 1.0375912408759125;
        partiesWithCorrection[2].result =
          partiesWithCorrection[2].result * 0.8311306901615272;
        partiesWithCorrection[3].result =
          partiesWithCorrection[3].result * 1.2736842105263158;
        partiesWithCorrection[4].result =
          partiesWithCorrection[4].result * 0.9267515923566879;
        partiesWithCorrection[5].result =
          partiesWithCorrection[5].result * 1.4651162790697674;
      }
      if (props.district.id === "no") {
        partiesWithCorrection[0].result =
          partiesWithCorrection[0].result * 0.8905712319339297;
        partiesWithCorrection[1].result =
          partiesWithCorrection[1].result * 0.9656934306569344;
        partiesWithCorrection[2].result =
          partiesWithCorrection[2].result * 1.0234948604992657;
        partiesWithCorrection[3].result =
          partiesWithCorrection[3].result * 1.542690058479532;
        partiesWithCorrection[4].result =
          partiesWithCorrection[4].result * 1.1019108280254777;
        partiesWithCorrection[5].result = partiesWithCorrection[5].result * 1;
      }
      if (props.district.id === "pk") {
        partiesWithCorrection[0].result =
          partiesWithCorrection[0].result * 0.9745354439091534;
        partiesWithCorrection[1].result =
          partiesWithCorrection[1].result * 0.9021897810218978;
        partiesWithCorrection[2].result =
          partiesWithCorrection[2].result * 0.9647577092511014;
        partiesWithCorrection[3].result =
          partiesWithCorrection[3].result * 1.4970760233918128;
        partiesWithCorrection[4].result =
          partiesWithCorrection[4].result * 1.0692675159235667;
        partiesWithCorrection[5].result = partiesWithCorrection[5].result * 1;
      }
      if (props.district.id === "pn") {
        partiesWithCorrection[0].result =
          partiesWithCorrection[0].result * 1.084881853636155;
        partiesWithCorrection[1].result =
          partiesWithCorrection[1].result * 0.7474452554744526;
        partiesWithCorrection[2].result =
          partiesWithCorrection[2].result * 0.9647577092511014;
        partiesWithCorrection[3].result =
          partiesWithCorrection[3].result * 1.1473684210526316;
        partiesWithCorrection[4].result =
          partiesWithCorrection[4].result * 1.197452229299363;
        partiesWithCorrection[5].result = partiesWithCorrection[5].result * 1;
      }
      if (props.district.id === "pp") {
        partiesWithCorrection[0].result =
          partiesWithCorrection[0].result * 0.8169304886441844;
        partiesWithCorrection[1].result =
          partiesWithCorrection[1].result * 1.1167883211678833;
        partiesWithCorrection[2].result =
          partiesWithCorrection[2].result * 0.972099853157122;
        partiesWithCorrection[3].result =
          partiesWithCorrection[3].result * 1.621052631578947;
        partiesWithCorrection[4].result =
          partiesWithCorrection[4].result * 1.0573248407643312;
        partiesWithCorrection[5].result = partiesWithCorrection[5].result * 1;
      }
      if (props.district.id === "po") {
        partiesWithCorrection[0].result =
          partiesWithCorrection[0].result * 0.5810965817848129;
        partiesWithCorrection[1].result =
          partiesWithCorrection[1].result * 1.656204379562044;
        partiesWithCorrection[2].result =
          partiesWithCorrection[2].result * 0.9706314243759179;
        partiesWithCorrection[3].result =
          partiesWithCorrection[3].result * 0.7251461988304093;
        partiesWithCorrection[4].result =
          partiesWithCorrection[4].result * 1.3121019108280254;
        partiesWithCorrection[5].result = partiesWithCorrection[5].result * 1;
      }
      if (props.district.id === "zk") {
        partiesWithCorrection[0].result =
          partiesWithCorrection[0].result * 0.8449185593025922;
        partiesWithCorrection[1].result =
          partiesWithCorrection[1].result * 1.179197080291971;
        partiesWithCorrection[2].result =
          partiesWithCorrection[2].result * 0.8781204111600589;
        partiesWithCorrection[3].result =
          partiesWithCorrection[3].result * 1.102923976608187;
        partiesWithCorrection[4].result =
          partiesWithCorrection[4].result * 1.2292993630573248;
        partiesWithCorrection[5].result = partiesWithCorrection[5].result * 1;
      }
      if (props.district.id === "zs") {
        partiesWithCorrection[0].result =
          partiesWithCorrection[0].result * 0.8054599678825418;
        partiesWithCorrection[1].result =
          partiesWithCorrection[1].result * 1.3032846715328468;
        partiesWithCorrection[2].result =
          partiesWithCorrection[2].result * 0.958883994126285;
        partiesWithCorrection[3].result =
          partiesWithCorrection[3].result * 0.8654970760233918;
        partiesWithCorrection[4].result =
          partiesWithCorrection[4].result * 1.214171974522293;
        partiesWithCorrection[5].result = partiesWithCorrection[5].result * 1;
      }
    }

    const eligibleParties = partiesWithCorrection.filter(
      (party) => party.isOverThreshold
    );

    const partiesWithSeats = eligibleParties.map((party) => ({
      ...party,
      seats: 0,
    }));

    for (let i = 0; i < totalSeats; i++) {
      const adjustedResults = partiesWithSeats.map((party) => ({
        ...party,
        adjustedResult: party.result / (party.seats + 1),
      }));

      const nextMandateParty = adjustedResults.reduce(
        (maxParty, party) =>
          party.adjustedResult > maxParty.adjustedResult ? party : maxParty,
        adjustedResults[0]
      );

      const matchingParty = parties.find(
        (party) => party.name === nextMandateParty.name
      );

      const partyWithSeat = partiesWithSeats.find(
        (party) => party.name === nextMandateParty.name
      );

      partyWithSeat.seats++;

      matchingParty.seats = partyWithSeat.seats;
    }

    const fullResults = partiesWithSeats.concat(
      parties
        .filter((party) => !party.isOverThreshold)
        .map((party) => ({
          ...party,
          seats: 0,
        }))
    );

    return fullResults;
  };

  useEffect(() => {
    const newSimpleDistricts = [...simpleDistricts];
    const districtToUpdate = newSimpleDistricts.find(
      (district) => district.id === props.district.id
    );

    if (districtToUpdate) {
      const nextSeats = totalMandates + 1;

      const currentResults = distributeSeats(
        props.district.parties,
        totalMandates
      );
      const nextResults = distributeSeats(props.district.parties, nextSeats);

      const potentialNextSeat = props.district.parties.find((party) => {
        const currentParty = currentResults.find(
          (resultParty) => resultParty.shortName === party.shortName
        );
        const nextParty = nextResults.find(
          (resultParty) => resultParty.shortName === party.shortName
        );

        return currentParty.seats !== nextParty.seats;
      });

      districtToUpdate.potentialNextSeat = potentialNextSeat;
      districtToUpdate.finalResult = currentResults;

      setSimpleDistricts(newSimpleDistricts);
    }

    // console.log(districtToUpdate);
    // eslint-disable-next-line
  }, [
    // props.district.id,
    setSimpleDistricts,
    totalMandates,
    // props.district.parties,
    // simpleDistricts,
  ]);

  const ResultBox = () => {
    return (
      <div className="simpleSummary-main__details-element">
        <div className="simpleSummary-main__details-element__title">
          {props.district.name}
          <div className="simpleSummary-main__details-element__title-subtitle">
            mandatów:{" "}
            <span style={{ fontWeight: "bold" }}>{totalMandates}</span>
          </div>
          {/* następny mandat: {props.district.potentialNextSeat.name} */}
        </div>

        <div className="simpleSummary-main__details-element__results">
          <div className="simpleSummary-main__details-element__results-box">
            {simpleDistricts
              .find((district) => district.id === props.district.id)
              .finalResult.map((party, index) => {
                if (party.shortName === "inne") return null;

                return (
                  <MySmallInfoBox
                    key={index}
                    txt={party.shortName}
                    value={party.seats}
                    backgroundTop={party.isOverThreshold ? party.color : "grey"}
                    allWidth={70}
                    radius="0px"
                    title={party.name}
                  />
                );
              })}
          </div>
          <MyBar
            result={props.district.finalResult}
            value="seats"
            name="Liczba mandatów z listy"
            tooltip={false}
            barWidth="100%"
            borderRadius={0}
            boxShadow
          />
          <MyBar
            result={props.district.finalResult}
            value="result"
            name="Procent głosów na liście"
            tooltip={false}
            barWidth="100%"
            borderRadius={0}
            boxShadow
          />
        </div>
      </div>
    );
  };

  return <ResultBox />;
};

export default SimpleSummaryDistrict;

/*=====================
phil@affin.io
@phil_renaud
Feb 2015
=====================*/


/*=======================================================
ESTABLISH OUR GLOBAL VARIABLES
=======================================================*/

// I've pulled the following as our working data sets from http://www.census.gov/foreign-trade/statistics/product/enduse/exports/
// Since these are at the top-level, they'll be within our "global" scope in the browser.
// Try typing "exportsToFrance" in your console to see what I mean!
var exportsToCanada = [{"id":"Value 2004","stats":[{"name":"food","value":10932929},{"name":"chem","value":47670039},{"name":"industrial","value":53236497},{"name":"transportation","value":50017241},{"name":"household","value":23395551},{"name":"military","value":453961},{"name":"misc","value":4173651}]},{"id":"Value 2005","stats":[{"name":"food","value":12045684},{"name":"chem","value":55398959},{"name":"industrial","value":60654420},{"name":"transportation","value":53606698},{"name":"household","value":25754653},{"name":"military","value":426801},{"name":"misc","value":4011470}]},{"id":"Value 2006","stats":[{"name":"food","value":13597489},{"name":"chem","value":61251666},{"name":"industrial","value":64778364},{"name":"transportation","value":56772879},{"name":"household","value":29330511},{"name":"military","value":408613},{"name":"misc","value":4516491}]},{"id":"Value 2007","stats":[{"name":"food","value":15828932},{"name":"chem","value":66940063},{"name":"industrial","value":66654562},{"name":"transportation","value":60112470},{"name":"household","value":33238849},{"name":"military","value":967493},{"name":"misc","value":5145773}]},{"id":"Value 2008","stats":[{"name":"food","value":18219404},{"name":"chem","value":78250553},{"name":"industrial","value":70007956},{"name":"transportation","value":53305854},{"name":"household","value":35125349},{"name":"military","value":973378},{"name":"misc","value":5267337}]},{"id":"Value 2009","stats":[{"name":"food","value":17824759},{"name":"chem","value":56023688},{"name":"industrial","value":56578386},{"name":"transportation","value":36755371},{"name":"household","value":32537736},{"name":"military","value":577091},{"name":"misc","value":4360923}]},{"id":"Value 2010","stats":[{"name":"food","value":19348514},{"name":"chem","value":71248282},{"name":"industrial","value":67126144},{"name":"transportation","value":49544427},{"name":"household","value":36118327},{"name":"military","value":875765},{"name":"misc","value":4995005}]},{"id":"Value 2011","stats":[{"name":"food","value":21855377},{"name":"chem","value":84782247},{"name":"industrial","value":76557266},{"name":"transportation","value":54471786},{"name":"household","value":37069568},{"name":"military","value":940553},{"name":"misc","value":5614733}]},{"id":"Value 2012","stats":[{"name":"food","value":23311658},{"name":"chem","value":85455718},{"name":"industrial","value":80737858},{"name":"transportation","value":59132702},{"name":"household","value":37528846},{"name":"military","value":536554},{"name":"misc","value":5947207}]},{"id":"Value 2013","stats":[{"name":"food","value":24219696},{"name":"chem","value":91480126},{"name":"industrial","value":79593366},{"name":"transportation","value":60460811},{"name":"household","value":38014667},{"name":"military","value":588784},{"name":"misc","value":7252143}]}];
var exportsToChina = [{"id":"Value 2004","stats":[{"name":"food","value":3760381},{"name":"chem","value":12903388},{"name":"industrial","value":15244521},{"name":"transportation","value":797838},{"name":"household","value":1363227},{"name":"military","value":20065},{"name":"misc","value":338355}]},{"id":"Value 2005","stats":[{"name":"food","value":3465480},{"name":"chem","value":16237672},{"name":"industrial","value":18091920},{"name":"transportation","value":1100668},{"name":"household","value":1894929},{"name":"military","value":18617},{"name":"misc","value":382725}]},{"id":"Value 2006","stats":[{"name":"food","value":4097812},{"name":"chem","value":21280422},{"name":"industrial","value":24145976},{"name":"transportation","value":1446163},{"name":"household","value":2202213},{"name":"military","value":13539},{"name":"misc","value":486883}]},{"id":"Value 2007","stats":[{"name":"food","value":6321448},{"name":"chem","value":24644385},{"name":"industrial","value":26811284},{"name":"transportation","value":1993637},{"name":"household","value":2591920},{"name":"military","value":24762},{"name":"misc","value":549460}]},{"id":"Value 2008","stats":[{"name":"food","value":9873897},{"name":"chem","value":26820153},{"name":"industrial","value":27541382},{"name":"transportation","value":2036260},{"name":"household","value":2777693},{"name":"military","value":20857},{"name":"misc","value":662599}]},{"id":"Value 2009","stats":[{"name":"food","value":11758489},{"name":"chem","value":26005110},{"name":"industrial","value":26172536},{"name":"transportation","value":2042145},{"name":"household","value":2904089},{"name":"military","value":27744},{"name":"misc","value":586568}]},{"id":"Value 2010","stats":[{"name":"food","value":14216520},{"name":"chem","value":35295819},{"name":"industrial","value":32467931},{"name":"transportation","value":4785317},{"name":"household","value":3786297},{"name":"military","value":32312},{"name":"misc","value":1326890}]},{"id":"Value 2011","stats":[{"name":"food","value":15467816},{"name":"chem","value":42798351},{"name":"industrial","value":33508441},{"name":"transportation","value":6867370},{"name":"household","value":4551313},{"name":"military","value":20201},{"name":"misc","value":908030}]},{"id":"Value 2012","stats":[{"name":"food","value":21152691},{"name":"chem","value":41382112},{"name":"industrial","value":34920138},{"name":"transportation","value":7405684},{"name":"household","value":4783495},{"name":"military","value":14101},{"name":"misc","value":857359}]},{"id":"Value 2013","stats":[{"name":"food","value":20854017},{"name":"chem","value":41951807},{"name":"industrial","value":41257025},{"name":"transportation","value":10879367},{"name":"household","value":5777776},{"name":"military","value":42930},{"name":"misc","value":973463}]}]
var exportsToIsrael = [{"id":"Value 2004","stats":[{"name":"food","value":477514},{"name":"chem","value":985885},{"name":"industrial","value":2701410},{"name":"transportation","value":104040},{"name":"household","value":3456444},{"name":"military","value":1260976},{"name":"misc","value":182786}]},{"id":"Value 2005","stats":[{"name":"food","value":293266},{"name":"chem","value":934065},{"name":"industrial","value":2596534},{"name":"transportation","value":150447},{"name":"household","value":4269694},{"name":"military","value":1277708},{"name":"misc","value":215627}]},{"id":"Value 2006","stats":[{"name":"food","value":405398},{"name":"chem","value":1154197},{"name":"industrial","value":2826023},{"name":"transportation","value":144885},{"name":"household","value":4606661},{"name":"military","value":1573156},{"name":"misc","value":254499}]},{"id":"Value 2007","stats":[{"name":"food","value":572852},{"name":"chem","value":1548281},{"name":"industrial","value":3458950},{"name":"transportation","value":200569},{"name":"household","value":5453915},{"name":"military","value":1346181},{"name":"misc","value":306739}]},{"id":"Value 2008","stats":[{"name":"food","value":807879},{"name":"chem","value":1978991},{"name":"industrial","value":3611967},{"name":"transportation","value":272210},{"name":"household","value":6164210},{"name":"military","value":1317769},{"name":"misc","value":333834}]},{"id":"Value 2009","stats":[{"name":"food","value":438300},{"name":"chem","value":1492563},{"name":"industrial","value":2412990},{"name":"transportation","value":190086},{"name":"household","value":3795798},{"name":"military","value":1010820},{"name":"misc","value":218802}]},{"id":"Value 2010","stats":[{"name":"food","value":616042},{"name":"chem","value":1583182},{"name":"industrial","value":2695166},{"name":"transportation","value":269623},{"name":"household","value":5072333},{"name":"military","value":786457},{"name":"misc","value":272220}]},{"id":"Value 2011","stats":[{"name":"food","value":828841},{"name":"chem","value":1662102},{"name":"industrial","value":3671263},{"name":"transportation","value":367359},{"name":"household","value":6557433},{"name":"military","value":580205},{"name":"misc","value":294412}]},{"id":"Value 2012","stats":[{"name":"food","value":568189},{"name":"chem","value":1832966},{"name":"industrial","value":4672740},{"name":"transportation","value":232977},{"name":"household","value":6020774},{"name":"military","value":595926},{"name":"misc","value":347656}]},{"id":"Value 2013","stats":[{"name":"food","value":583103},{"name":"chem","value":1721337},{"name":"industrial","value":3674881},{"name":"transportation","value":250752},{"name":"household","value":6550625},{"name":"military","value":672008},{"name":"misc","value":294356}]}]
var exportsToHaiti = [{"id":"Value 2004","stats":[{"name":"food","value":205793},{"name":"chem","value":96221},{"name":"industrial","value":69614},{"name":"transportation","value":29287},{"name":"household","value":205165},{"name":"military","value":1073},{"name":"misc","value":65829}]},{"id":"Value 2005","stats":[{"name":"food","value":212928},{"name":"chem","value":131645},{"name":"industrial","value":47660},{"name":"transportation","value":27149},{"name":"household","value":232076},{"name":"military","value":833},{"name":"misc","value":57331}]},{"id":"Value 2006","stats":[{"name":"food","value":210642},{"name":"chem","value":120502},{"name":"industrial","value":122210},{"name":"transportation","value":37942},{"name":"household","value":254914},{"name":"military","value":1548},{"name":"misc","value":69611}]},{"id":"Value 2007","stats":[{"name":"food","value":224027},{"name":"chem","value":127645},{"name":"industrial","value":72929},{"name":"transportation","value":23085},{"name":"household","value":125063},{"name":"military","value":3744},{"name":"misc","value":103698}]},{"id":"Value 2008","stats":[{"name":"food","value":390412},{"name":"chem","value":121396},{"name":"industrial","value":94224},{"name":"transportation","value":34339},{"name":"household","value":90092},{"name":"military","value":1616},{"name":"misc","value":211905}]},{"id":"Value 2009","stats":[{"name":"food","value":317155},{"name":"chem","value":114649},{"name":"industrial","value":79270},{"name":"transportation","value":17239},{"name":"household","value":98794},{"name":"military","value":3859},{"name":"misc","value":159441}]},{"id":"Value 2010","stats":[{"name":"food","value":373807},{"name":"chem","value":207047},{"name":"industrial","value":141543},{"name":"transportation","value":42545},{"name":"household","value":235631},{"name":"military","value":1987},{"name":"misc","value":206014}]},{"id":"Value 2011","stats":[{"name":"food","value":312061},{"name":"chem","value":204074},{"name":"industrial","value":133548},{"name":"transportation","value":34856},{"name":"household","value":212732},{"name":"military","value":1423},{"name":"misc","value":160251}]},{"id":"Value 2012","stats":[{"name":"food","value":360709},{"name":"chem","value":182925},{"name":"industrial","value":91661},{"name":"transportation","value":27184},{"name":"household","value":265467},{"name":"military","value":795},{"name":"misc","value":121519}]},{"id":"Value 2013","stats":[{"name":"food","value":386573},{"name":"chem","value":211080},{"name":"industrial","value":119029},{"name":"transportation","value":22371},{"name":"household","value":325243},{"name":"military","value":2669},{"name":"misc","value":159727}]}]
var exportsToCuba = [{"id":"Value 2004","stats":[{"name":"food","value":380567},{"name":"chem","value":17143},{"name":"industrial","value":506},{"name":"transportation","value":169},{"name":"household","value":1347},{"name":"military","value":0},{"name":"misc","value":4410}]},{"id":"Value 2005","stats":[{"name":"food","value":336403},{"name":"chem","value":25560},{"name":"industrial","value":840},{"name":"transportation","value":242},{"name":"household","value":2285},{"name":"military","value":0},{"name":"misc","value":3705}]},{"id":"Value 2006","stats":[{"name":"food","value":314410},{"name":"chem","value":21204},{"name":"industrial","value":1167},{"name":"transportation","value":162},{"name":"household","value":2636},{"name":"military","value":0},{"name":"misc","value":891}]},{"id":"Value 2007","stats":[{"name":"food","value":415603},{"name":"chem","value":26336},{"name":"industrial","value":637},{"name":"transportation","value":161},{"name":"household","value":2390},{"name":"military","value":0},{"name":"misc","value":1933}]},{"id":"Value 2008","stats":[{"name":"food","value":662170},{"name":"chem","value":44296},{"name":"industrial","value":323},{"name":"transportation","value":0},{"name":"household","value":1201},{"name":"military","value":0},{"name":"misc","value":3509}]},{"id":"Value 2009","stats":[{"name":"food","value":499417},{"name":"chem","value":31079},{"name":"industrial","value":99},{"name":"transportation","value":0},{"name":"household","value":640},{"name":"military","value":0},{"name":"misc","value":1541}]},{"id":"Value 2010","stats":[{"name":"food","value":326318},{"name":"chem","value":34547},{"name":"industrial","value":224},{"name":"transportation","value":3},{"name":"household","value":710},{"name":"military","value":0},{"name":"misc","value":1311}]},{"id":"Value 2011","stats":[{"name":"food","value":325609},{"name":"chem","value":34640},{"name":"industrial","value":187},{"name":"transportation","value":847},{"name":"household","value":1586},{"name":"military","value":0},{"name":"misc","value":446}]},{"id":"Value 2012","stats":[{"name":"food","value":429033},{"name":"chem","value":30495},{"name":"industrial","value":827},{"name":"transportation","value":6},{"name":"household","value":3396},{"name":"military","value":0},{"name":"misc","value":698}]},{"id":"Value 2013","stats":[{"name":"food","value":335152},{"name":"chem","value":15066},{"name":"industrial","value":4777},{"name":"transportation","value":0},{"name":"household","value":2854},{"name":"military","value":200},{"name":"misc","value":1379}]}]
var exportsToSaudiArabia = [{"id":"Value 2004","stats":[{"name":"food","value":337768},{"name":"chem","value":691685},{"name":"industrial","value":1893905},{"name":"transportation","value":1272604},{"name":"household","value":559066},{"name":"military","value":288239},{"name":"misc","value":213484}]},{"id":"Value 2005","stats":[{"name":"food","value":318609},{"name":"chem","value":832358},{"name":"industrial","value":2364793},{"name":"transportation","value":2376284},{"name":"household","value":529590},{"name":"military","value":182360},{"name":"misc","value":201405}]},{"id":"Value 2006","stats":[{"name":"food","value":380851},{"name":"chem","value":897103},{"name":"industrial","value":3026660},{"name":"transportation","value":2356946},{"name":"household","value":565381},{"name":"military","value":141988},{"name":"misc","value":270602}]},{"id":"Value 2007","stats":[{"name":"food","value":638228},{"name":"chem","value":1280527},{"name":"industrial","value":4866683},{"name":"transportation","value":2491745},{"name":"household","value":598608},{"name":"military","value":215472},{"name":"misc","value":304622}]},{"id":"Value 2008","stats":[{"name":"food","value":804658},{"name":"chem","value":1477027},{"name":"industrial","value":4921382},{"name":"transportation","value":3734105},{"name":"household","value":763990},{"name":"military","value":574378},{"name":"misc","value":208711}]},{"id":"Value 2009","stats":[{"name":"food","value":651002},{"name":"chem","value":1153368},{"name":"industrial","value":5042968},{"name":"transportation","value":2358492},{"name":"household","value":696317},{"name":"military","value":727542},{"name":"misc","value":162465}]},{"id":"Value 2010","stats":[{"name":"food","value":796674},{"name":"chem","value":1330091},{"name":"industrial","value":3952742},{"name":"transportation","value":3778881},{"name":"household","value":830845},{"name":"military","value":578136},{"name":"misc","value":238830}]},{"id":"Value 2011","stats":[{"name":"food","value":1222212},{"name":"chem","value":1749424},{"name":"industrial","value":4799556},{"name":"transportation","value":4455667},{"name":"household","value":900866},{"name":"military","value":576423},{"name":"misc","value":219520}]},{"id":"Value 2012","stats":[{"name":"food","value":1113413},{"name":"chem","value":2040140},{"name":"industrial","value":6981417},{"name":"transportation","value":6001467},{"name":"household","value":952525},{"name":"military","value":630661},{"name":"misc","value":247648}]},{"id":"Value 2013","stats":[{"name":"food","value":1098357},{"name":"chem","value":2073060},{"name":"industrial","value":7850866},{"name":"transportation","value":5609429},{"name":"household","value":1149983},{"name":"military","value":887814},{"name":"misc","value":286946}]}]
var exportsToMexico = [{"id":"Value 2004","stats":[{"name":"food","value":7562067},{"name":"chem","value":34271533},{"name":"industrial","value":40388613},{"name":"transportation","value":15520714},{"name":"household","value":9043002},{"name":"military","value":143174},{"name":"misc","value":3802183}]},{"id":"Value 2005","stats":[{"name":"food","value":8547068},{"name":"chem","value":39839249},{"name":"industrial","value":41930724},{"name":"transportation","value":16165258},{"name":"household","value":9607830},{"name":"military","value":157186},{"name":"misc","value":4000263}]},{"id":"Value 2006","stats":[{"name":"food","value":9946844},{"name":"chem","value":45009254},{"name":"industrial","value":46522583},{"name":"transportation","value":17076148},{"name":"household","value":10454785},{"name":"military","value":267626},{"name":"misc","value":4444475}]},{"id":"Value 2007","stats":[{"name":"food","value":11622270},{"name":"chem","value":46863734},{"name":"industrial","value":42962929},{"name":"transportation","value":18708481},{"name":"household","value":10808977},{"name":"military","value":237885},{"name":"misc","value":4713861}]},{"id":"Value 2008","stats":[{"name":"food","value":14613236},{"name":"chem","value":54650996},{"name":"industrial","value":46173826},{"name":"transportation","value":18749628},{"name":"household","value":11727887},{"name":"military","value":272566},{"name":"misc","value":5031920}]},{"id":"Value 2009","stats":[{"name":"food","value":11525961},{"name":"chem","value":43567379},{"name":"industrial","value":44051404},{"name":"transportation","value":14479414},{"name":"household","value":10917169},{"name":"military","value":394988},{"name":"misc","value":3955818}]},{"id":"Value 2010","stats":[{"name":"food","value":12821575},{"name":"chem","value":58519430},{"name":"industrial","value":53360662},{"name":"transportation","value":20697981},{"name":"household","value":12698147},{"name":"military","value":363610},{"name":"misc","value":5203239}]},{"id":"Value 2011","stats":[{"name":"food","value":16183686},{"name":"chem","value":75946320},{"name":"industrial","value":60742137},{"name":"transportation","value":25203557},{"name":"household","value":13645033},{"name":"military","value":501886},{"name":"misc","value":6066115}]},{"id":"Value 2012","stats":[{"name":"food","value":17244541},{"name":"chem","value":80048704},{"name":"industrial","value":69119798},{"name":"transportation","value":28584648},{"name":"household","value":13776295},{"name":"military","value":524929},{"name":"misc","value":6608143}]},{"id":"Value 2013","stats":[{"name":"food","value":16622178},{"name":"chem","value":82341997},{"name":"industrial","value":74688503},{"name":"transportation","value":31399953},{"name":"household","value":13731200},{"name":"military","value":425145},{"name":"misc","value":6870088}]}]
var exportsToSierraLeone = [{"id":"Value 2004","stats":[{"name":"food","value":12610},{"name":"chem","value":4456},{"name":"industrial","value":7732},{"name":"transportation","value":3312},{"name":"household","value":7437},{"name":"military","value":0},{"name":"misc","value":5079}]},{"id":"Value 2005","stats":[{"name":"food","value":11131},{"name":"chem","value":1860},{"name":"industrial","value":12729},{"name":"transportation","value":3756},{"name":"household","value":4574},{"name":"military","value":0},{"name":"misc","value":3781}]},{"id":"Value 2006","stats":[{"name":"food","value":10244},{"name":"chem","value":3932},{"name":"industrial","value":10861},{"name":"transportation","value":4570},{"name":"household","value":6418},{"name":"military","value":7},{"name":"misc","value":3214}]},{"id":"Value 2007","stats":[{"name":"food","value":14259},{"name":"chem","value":7181},{"name":"industrial","value":15754},{"name":"transportation","value":6915},{"name":"household","value":7850},{"name":"military","value":13},{"name":"misc","value":3451}]},{"id":"Value 2008","stats":[{"name":"food","value":12238},{"name":"chem","value":4240},{"name":"industrial","value":21762},{"name":"transportation","value":10430},{"name":"household","value":6770},{"name":"military","value":3},{"name":"misc","value":3920}]},{"id":"Value 2009","stats":[{"name":"food","value":6670},{"name":"chem","value":2126},{"name":"industrial","value":10051},{"name":"transportation","value":11247},{"name":"household","value":9111},{"name":"military","value":23},{"name":"misc","value":3309}]},{"id":"Value 2010","stats":[{"name":"food","value":15357},{"name":"chem","value":1868},{"name":"industrial","value":14103},{"name":"transportation","value":14087},{"name":"household","value":11291},{"name":"military","value":164},{"name":"misc","value":4192}]},{"id":"Value 2011","stats":[{"name":"food","value":25138},{"name":"chem","value":3592},{"name":"industrial","value":37705},{"name":"transportation","value":18179},{"name":"household","value":10434},{"name":"military","value":2091},{"name":"misc","value":5653}]},{"id":"Value 2012","stats":[{"name":"food","value":29844},{"name":"chem","value":3162},{"name":"industrial","value":30037},{"name":"transportation","value":14837},{"name":"household","value":16118},{"name":"military","value":1020},{"name":"misc","value":5763}]},{"id":"Value 2013","stats":[{"name":"food","value":17298},{"name":"chem","value":3161},{"name":"industrial","value":24560},{"name":"transportation","value":18326},{"name":"household","value":15206},{"name":"military","value":12},{"name":"misc","value":3858}]}]
var exportsToFrance = [{"id":"Value 2004","stats":[{"name":"food","value":417319},{"name":"chem","value":3445177},{"name":"industrial","value":11939638},{"name":"transportation","value":633684},{"name":"household","value":3703506},{"name":"military","value":141262},{"name":"misc","value":637162}]},{"id":"Value 2005","stats":[{"name":"food","value":480419},{"name":"chem","value":3757534},{"name":"industrial","value":12327858},{"name":"transportation","value":670844},{"name":"household","value":4188218},{"name":"military","value":145086},{"name":"misc","value":688665}]},{"id":"Value 2006","stats":[{"name":"food","value":513441},{"name":"chem","value":4382235},{"name":"industrial","value":12901207},{"name":"transportation","value":737578},{"name":"household","value":4058481},{"name":"military","value":147750},{"name":"misc","value":771134}]},{"id":"Value 2007","stats":[{"name":"food","value":579912},{"name":"chem","value":4881470},{"name":"industrial","value":14442782},{"name":"transportation","value":970408},{"name":"household","value":4768255},{"name":"military","value":151365},{"name":"misc","value":881776}]},{"id":"Value 2008","stats":[{"name":"food","value":644597},{"name":"chem","value":6127322},{"name":"industrial","value":14724123},{"name":"transportation","value":788292},{"name":"household","value":5389086},{"name":"military","value":195197},{"name":"misc","value":971483}]},{"id":"Value 2009","stats":[{"name":"food","value":489314},{"name":"chem","value":4972952},{"name":"industrial","value":14924743},{"name":"transportation","value":452723},{"name":"household","value":4610171},{"name":"military","value":148860},{"name":"misc","value":894250}]},{"id":"Value 2010","stats":[{"name":"food","value":676401},{"name":"chem","value":5411754},{"name":"industrial","value":13827699},{"name":"transportation","value":620035},{"name":"household","value":5059388},{"name":"military","value":179373},{"name":"misc","value":1195303}]},{"id":"Value 2011","stats":[{"name":"food","value":665709},{"name":"chem","value":7117592},{"name":"industrial","value":13954391},{"name":"transportation","value":657981},{"name":"household","value":4312892},{"name":"military","value":193457},{"name":"misc","value":954790}]},{"id":"Value 2012","stats":[{"name":"food","value":568167},{"name":"chem","value":8336073},{"name":"industrial","value":14888001},{"name":"transportation","value":646759},{"name":"household","value":5129149},{"name":"military","value":207790},{"name":"misc","value":1035318}]},{"id":"Value 2013","stats":[{"name":"food","value":723202},{"name":"chem","value":9191965},{"name":"industrial","value":15211454},{"name":"transportation","value":591874},{"name":"household","value":4556869},{"name":"military","value":316638},{"name":"misc","value":1152808}]}]
var exportsToPakistan = [{"id":"Value 2004","stats":[{"name":"food","value":79089},{"name":"chem","value":474025},{"name":"industrial","value":924108},{"name":"transportation","value":8946},{"name":"household","value":58936},{"name":"military","value":111828},{"name":"misc","value":23153}]},{"id":"Value 2005","stats":[{"name":"food","value":53784},{"name":"chem","value":519104},{"name":"industrial","value":492500},{"name":"transportation","value":8198},{"name":"household","value":76282},{"name":"military","value":65307},{"name":"misc","value":36460}]},{"id":"Value 2006","stats":[{"name":"food","value":46125},{"name":"chem","value":408390},{"name":"industrial","value":1024729},{"name":"transportation","value":10127},{"name":"household","value":55884},{"name":"military","value":149208},{"name":"misc","value":28164}]},{"id":"Value 2007","stats":[{"name":"food","value":62106},{"name":"chem","value":569083},{"name":"industrial","value":1012959},{"name":"transportation","value":16074},{"name":"household","value":70312},{"name":"military","value":176181},{"name":"misc","value":36859}]},{"id":"Value 2008","stats":[{"name":"food","value":96768},{"name":"chem","value":518662},{"name":"industrial","value":804793},{"name":"transportation","value":23692},{"name":"household","value":96616},{"name":"military","value":322432},{"name":"misc","value":34881}]},{"id":"Value 2009","stats":[{"name":"food","value":81318},{"name":"chem","value":628464},{"name":"industrial","value":503549},{"name":"transportation","value":59899},{"name":"household","value":122893},{"name":"military","value":186364},{"name":"misc","value":35463}]},{"id":"Value 2010","stats":[{"name":"food","value":156898},{"name":"chem","value":621085},{"name":"industrial","value":511153},{"name":"transportation","value":79777},{"name":"household","value":149537},{"name":"military","value":339805},{"name":"misc","value":42814}]},{"id":"Value 2011","stats":[{"name":"food","value":175498},{"name":"chem","value":728909},{"name":"industrial","value":570093},{"name":"transportation","value":47322},{"name":"household","value":94460},{"name":"military","value":329002},{"name":"misc","value":43500}]},{"id":"Value 2012","stats":[{"name":"food","value":134105},{"name":"chem","value":638238},{"name":"industrial","value":456992},{"name":"transportation","value":16643},{"name":"household","value":93615},{"name":"military","value":161594},{"name":"misc","value":28817}]},{"id":"Value 2013","stats":[{"name":"food","value":124103},{"name":"chem","value":710335},{"name":"industrial","value":508602},{"name":"transportation","value":11817},{"name":"household","value":86587},{"name":"military","value":174282},{"name":"misc","value":29924}]}]
var exportsToJapan = [{"id":"Value 2004","stats":[{"name":"food","value":8823068},{"name":"chem","value":11608670},{"name":"industrial","value":21341001},{"name":"transportation","value":2015324},{"name":"household","value":6770463},{"name":"military","value":1454242},{"name":"misc","value":1555918}]},{"id":"Value 2005","stats":[{"name":"food","value":8696798},{"name":"chem","value":11980804},{"name":"industrial","value":21437539},{"name":"transportation","value":2020384},{"name":"household","value":7228309},{"name":"military","value":1669467},{"name":"misc","value":1647284}]},{"id":"Value 2006","stats":[{"name":"food","value":8993570},{"name":"chem","value":13427303},{"name":"industrial","value":22770475},{"name":"transportation","value":2276258},{"name":"household","value":7804768},{"name":"military","value":1895515},{"name":"misc","value":1291088}]},{"id":"Value 2007","stats":[{"name":"food","value":10569345},{"name":"chem","value":15141003},{"name":"industrial","value":22449613},{"name":"transportation","value":2300823},{"name":"household","value":7682311},{"name":"military","value":1741328},{"name":"misc","value":1275165}]},{"id":"Value 2008","stats":[{"name":"food","value":13685289},{"name":"chem","value":16890403},{"name":"industrial","value":21184386},{"name":"transportation","value":2164196},{"name":"household","value":7738807},{"name":"military","value":2125614},{"name":"misc","value":1353058}]},{"id":"Value 2009","stats":[{"name":"food","value":11568313},{"name":"chem","value":11269810},{"name":"industrial","value":16688918},{"name":"transportation","value":1126448},{"name":"household","value":7535232},{"name":"military","value":1743459},{"name":"misc","value":1202006}]},{"id":"Value 2010","stats":[{"name":"food","value":12302278},{"name":"chem","value":15695759},{"name":"industrial","value":18515860},{"name":"transportation","value":1677622},{"name":"household","value":8881121},{"name":"military","value":1632127},{"name":"misc","value":1767089}]},{"id":"Value 2011","stats":[{"name":"food","value":14556473},{"name":"chem","value":17655675},{"name":"industrial","value":20070447},{"name":"transportation","value":2049380},{"name":"household","value":9000386},{"name":"military","value":1383876},{"name":"misc","value":1083497}]},{"id":"Value 2012","stats":[{"name":"food","value":13952630},{"name":"chem","value":16713505},{"name":"industrial","value":23728020},{"name":"transportation","value":2402875},{"name":"household","value":10475100},{"name":"military","value":1656786},{"name":"misc","value":1034659}]},{"id":"Value 2013","stats":[{"name":"food","value":12671733},{"name":"chem","value":16151870},{"name":"industrial","value":22357447},{"name":"transportation","value":2072095},{"name":"household","value":9504414},{"name":"military","value":1435687},{"name":"misc","value":1012531}]}]
var exportsToVaticanCity = [{"id":"Value 2004","stats":[{"name":"food","value":137},{"name":"chem","value":2195},{"name":"industrial","value":954},{"name":"transportation","value":94},{"name":"household","value":663},{"name":"military","value":0},{"name":"misc","value":116}]},{"id":"Value 2005","stats":[{"name":"food","value":1268},{"name":"chem","value":13531},{"name":"industrial","value":7377},{"name":"transportation","value":68},{"name":"household","value":1296},{"name":"military","value":36},{"name":"misc","value":604}]},{"id":"Value 2006","stats":[{"name":"food","value":1629},{"name":"chem","value":979},{"name":"industrial","value":8417},{"name":"transportation","value":135},{"name":"household","value":562},{"name":"military","value":0},{"name":"misc","value":316}]},{"id":"Value 2007","stats":[{"name":"food","value":365},{"name":"chem","value":1558},{"name":"industrial","value":15492},{"name":"transportation","value":121},{"name":"household","value":266},{"name":"military","value":0},{"name":"misc","value":464}]},{"id":"Value 2008","stats":[{"name":"food","value":81},{"name":"chem","value":1486},{"name":"industrial","value":5584},{"name":"transportation","value":1004},{"name":"household","value":337},{"name":"military","value":0},{"name":"misc","value":786}]},{"id":"Value 2009","stats":[{"name":"food","value":189},{"name":"chem","value":3629},{"name":"industrial","value":1687},{"name":"transportation","value":104},{"name":"household","value":1512},{"name":"military","value":48},{"name":"misc","value":181}]},{"id":"Value 2010","stats":[{"name":"food","value":18},{"name":"chem","value":953},{"name":"industrial","value":1652},{"name":"transportation","value":273},{"name":"household","value":199},{"name":"military","value":0},{"name":"misc","value":100}]},{"id":"Value 2011","stats":[{"name":"food","value":72},{"name":"chem","value":431},{"name":"industrial","value":1100},{"name":"transportation","value":292},{"name":"household","value":149},{"name":"military","value":0},{"name":"misc","value":243}]},{"id":"Value 2012","stats":[{"name":"food","value":394},{"name":"chem","value":1450},{"name":"industrial","value":2395},{"name":"transportation","value":226},{"name":"household","value":191},{"name":"military","value":0},{"name":"misc","value":149}]},{"id":"Value 2013","stats":[{"name":"food","value":1210},{"name":"chem","value":107},{"name":"industrial","value":956},{"name":"transportation","value":76},{"name":"household","value":51},{"name":"military","value":0},{"name":"misc","value":64}]}]
var exportsToArgentina = [{"id":"Value 2004","stats":[{"name":"food","value":31457},{"name":"chem","value":1366612},{"name":"industrial","value":1421524},{"name":"transportation","value":142100},{"name":"household","value":319962},{"name":"military","value":8148},{"name":"misc","value":98280}]},{"id":"Value 2005","stats":[{"name":"food","value":36634},{"name":"chem","value":1546153},{"name":"industrial","value":1877365},{"name":"transportation","value":174655},{"name":"household","value":345422},{"name":"military","value":18585},{"name":"misc","value":123052}]},{"id":"Value 2006","stats":[{"name":"food","value":41142},{"name":"chem","value":1864986},{"name":"industrial","value":2073800},{"name":"transportation","value":217334},{"name":"household","value":422174},{"name":"military","value":16137},{"name":"misc","value":140356}]},{"id":"Value 2007","stats":[{"name":"food","value":45186},{"name":"chem","value":2158620},{"name":"industrial","value":2656210},{"name":"transportation","value":287008},{"name":"household","value":518832},{"name":"military","value":24257},{"name":"misc","value":165742}]},{"id":"Value 2008","stats":[{"name":"food","value":59844},{"name":"chem","value":2969330},{"name":"industrial","value":3313136},{"name":"transportation","value":330710},{"name":"household","value":611165},{"name":"military","value":26047},{"name":"misc","value":226083}]},{"id":"Value 2009","stats":[{"name":"food","value":44195},{"name":"chem","value":2073935},{"name":"industrial","value":2464781},{"name":"transportation","value":220304},{"name":"household","value":570029},{"name":"military","value":33321},{"name":"misc","value":162311}]},{"id":"Value 2010","stats":[{"name":"food","value":63396},{"name":"chem","value":2967344},{"name":"industrial","value":3007252},{"name":"transportation","value":237800},{"name":"household","value":857406},{"name":"military","value":29547},{"name":"misc","value":229391}]},{"id":"Value 2011","stats":[{"name":"food","value":78068},{"name":"chem","value":4629135},{"name":"industrial","value":3672462},{"name":"transportation","value":249645},{"name":"household","value":940644},{"name":"military","value":38641},{"name":"misc","value":290202}]},{"id":"Value 2012","stats":[{"name":"food","value":76775},{"name":"chem","value":5134697},{"name":"industrial","value":3482855},{"name":"transportation","value":239926},{"name":"household","value":957641},{"name":"military","value":70025},{"name":"misc","value":294615}]},{"id":"Value 2013","stats":[{"name":"food","value":91237},{"name":"chem","value":5130251},{"name":"industrial","value":3501758},{"name":"transportation","value":321013},{"name":"household","value":935673},{"name":"military","value":81122},{"name":"misc","value":292840}]}]
var exportsToIraq = [{"id":"Value 2004","stats":[{"name":"food","value":67456},{"name":"chem","value":22836},{"name":"industrial","value":495314},{"name":"transportation","value":158246},{"name":"household","value":54726},{"name":"military","value":33914},{"name":"misc","value":23956}]},{"id":"Value 2005","stats":[{"name":"food","value":325489},{"name":"chem","value":18952},{"name":"industrial","value":670105},{"name":"transportation","value":118251},{"name":"household","value":43635},{"name":"military","value":163676},{"name":"misc","value":33877}]},{"id":"Value 2006","stats":[{"name":"food","value":451164},{"name":"chem","value":21957},{"name":"industrial","value":408043},{"name":"transportation","value":269799},{"name":"household","value":114029},{"name":"military","value":190265},{"name":"misc","value":35362}]},{"id":"Value 2007","stats":[{"name":"food","value":575784},{"name":"chem","value":28228},{"name":"industrial","value":450442},{"name":"transportation","value":88622},{"name":"household","value":62757},{"name":"military","value":320755},{"name":"misc","value":33612}]},{"id":"Value 2008","stats":[{"name":"food","value":886633},{"name":"chem","value":60955},{"name":"industrial","value":653377},{"name":"transportation","value":116856},{"name":"household","value":79252},{"name":"military","value":224609},{"name":"misc","value":48111}]},{"id":"Value 2009","stats":[{"name":"food","value":153758},{"name":"chem","value":61148},{"name":"industrial","value":999985},{"name":"transportation","value":303604},{"name":"household","value":61032},{"name":"military","value":134910},{"name":"misc","value":57975}]},{"id":"Value 2010","stats":[{"name":"food","value":287269},{"name":"chem","value":95207},{"name":"industrial","value":864238},{"name":"transportation","value":155621},{"name":"household","value":64275},{"name":"military","value":129768},{"name":"misc","value":46688}]},{"id":"Value 2011","stats":[{"name":"food","value":656377},{"name":"chem","value":86477},{"name":"industrial","value":1101469},{"name":"transportation","value":212919},{"name":"household","value":94409},{"name":"military","value":193508},{"name":"misc","value":55202}]},{"id":"Value 2012","stats":[{"name":"food","value":143598},{"name":"chem","value":83656},{"name":"industrial","value":1200617},{"name":"transportation","value":274053},{"name":"household","value":52500},{"name":"military","value":258837},{"name":"misc","value":40613}]},{"id":"Value 2013","stats":[{"name":"food","value":151648},{"name":"chem","value":91970},{"name":"industrial","value":1219123},{"name":"transportation","value":238752},{"name":"household","value":66783},{"name":"military","value":224465},{"name":"misc","value":28372}]}]
var global = [{"id":"Canada","stats":[{"name":"food","value":24219696},{"name":"chem","value":91480126},{"name":"industrial","value":79593366},{"name":"transportation","value":60460811},{"name":"household","value":38014667},{"name":"military","value":588784},{"name":"misc","value":7252143}]},{"id":"Mexico","stats":[{"name":"food","value":16622178},{"name":"chem","value":82341997},{"name":"industrial","value":74688503},{"name":"transportation","value":31399953},{"name":"household","value":13731200},{"name":"military","value":425145},{"name":"misc","value":6870088}]},{"id":"China","stats":[{"name":"food","value":20854017},{"name":"chem","value":41951807},{"name":"industrial","value":41257025},{"name":"transportation","value":10879367},{"name":"household","value":5777776},{"name":"military","value":42930},{"name":"misc","value":973463}]},{"id":"Japan","stats":[{"name":"food","value":12671733},{"name":"chem","value":16151870},{"name":"industrial","value":22357447},{"name":"transportation","value":2072095},{"name":"household","value":9504414},{"name":"military","value":1435687},{"name":"misc","value":1012531}]},{"id":"France","stats":[{"name":"food","value":723202},{"name":"chem","value":9191965},{"name":"industrial","value":15211454},{"name":"transportation","value":591874},{"name":"household","value":4556869},{"name":"military","value":316638},{"name":"misc","value":1152808}]},{"id":"SaudiArabia","stats":[{"name":"food","value":1098357},{"name":"chem","value":2073060},{"name":"industrial","value":7850866},{"name":"transportation","value":5609429},{"name":"household","value":1149983},{"name":"military","value":887814},{"name":"misc","value":286946}]},{"id":"Israel","stats":[{"name":"food","value":583103},{"name":"chem","value":1721337},{"name":"industrial","value":3674881},{"name":"transportation","value":250752},{"name":"household","value":6550625},{"name":"military","value":672008},{"name":"misc","value":294356}]},{"id":"Argentina","stats":[{"name":"food","value":91237},{"name":"chem","value":5130251},{"name":"industrial","value":3501758},{"name":"transportation","value":321013},{"name":"household","value":935673},{"name":"military","value":81122},{"name":"misc","value":292840}]},{"id":"Iraq","stats":[{"name":"food","value":151648},{"name":"chem","value":91970},{"name":"industrial","value":1219123},{"name":"transportation","value":238752},{"name":"household","value":66783},{"name":"military","value":224465},{"name":"misc","value":28372}]},{"id":"Pakistan","stats":[{"name":"food","value":124103},{"name":"chem","value":710335},{"name":"industrial","value":508602},{"name":"transportation","value":11817},{"name":"household","value":86587},{"name":"military","value":174282},{"name":"misc","value":29924}]},{"id":"Haiti","stats":[{"name":"food","value":386573},{"name":"chem","value":211080},{"name":"industrial","value":119029},{"name":"transportation","value":22371},{"name":"household","value":325243},{"name":"military","value":2669},{"name":"misc","value":159727}]},{"id":"Cuba","stats":[{"name":"food","value":335152},{"name":"chem","value":15066},{"name":"industrial","value":4777},{"name":"transportation","value":0},{"name":"household","value":2854},{"name":"military","value":200},{"name":"misc","value":1379}]},{"id":"SierraLeone","stats":[{"name":"food","value":17298},{"name":"chem","value":3161},{"name":"industrial","value":24560},{"name":"transportation","value":18326},{"name":"household","value":15206},{"name":"military","value":12},{"name":"misc","value":3858}]},{"id":"VaticanCity","stats":[{"name":"food","value":1210},{"name":"chem","value":107},{"name":"industrial","value":956},{"name":"transportation","value":76},{"name":"household","value":51},{"name":"military","value":0},{"name":"misc","value":64}]}]

// Set ourArray to the data you'd like to use for this experiment, and title your chart to match
var ourArray = exportsToCanada;
$('h4.bar-chart-title').text('Exports to Canada, 2004-2013');










/*=======================================================
INITIALIZATION
=======================================================*/

// jQuery has a $(document).ready() function that fires when your page is ready to go.
// let's use it to kick things off.
$(document).ready(function(){
  universalController();
}); //document.ready


// Think of universalController() as our Table of Contents
function universalController(){

  console.log('Universal Controller - ready to run your functions!');

////// STEP 1: Draw a bar for each year of our data.
  // initializeBars(ourArray);

////// STEP 2: Allow for user interaction with our visualization
  // initializeControls();

////// STEP 3: Advanced interaction through a click and hold interface
  // handleTouch();

}; //universalController










/*=======================================================
STEP 1: STATIC BAR GRAPH
=======================================================*/

function initializeBars(comparable) {
// We create a new element using jQuery. We can style it in CSS using the .bar-chart class.
  $('.sandbox').append('<div class="bar-chart"></div>');

// We reduce our comparable to yearly totals
  yearTotals = _.map(comparable, function(obj,iter){
    var valueArray = _.pluck(obj.stats, "value");
    return _.reduce(valueArray, function(memo,num) { return memo + num });
  }); //_.map

// For each of this yearly totals, create a bar in our new bar chart.
  $.each(yearTotals, function(key,value){
    $('.bar-chart').append('<div class="bar" data-index="'+comparable[key].id+'" data-value="'+value+'"><span><em>' + comparable[key].id + ':</em> <strong>' + commafy(value) + '</strong></span></div>');
  }); //each yearTotals

//////// Step 1A: Make the length of each bar relative to its $ spent
  // relativeBarWidths();

//////// Step 1B: Drop another level of metrics in: a breakdown of the yearly spend
  // createLegend(comparable);
  // applyCategories(comparable);

//////// Step 1C: Make the width of each category proportional to 
  // setCategoryWidths();
  // setCategoryRatios(comparable);

}; //initializeBars




/*=======================================================
STEP 1A: RELATIVE BAR WIDTHS
=======================================================*/

// Each bar should have its width proportional to the relative max
function relativeBarWidths(){
  var max = _.max(yearTotals);
  $('.bar').each(function(){
    $(this).css({'width': $(this).attr('data-value') / max * 100 + "%"})
  }); //each bar
}; //relativeBarWidths




/*=======================================================
STEP 1B: SPEND-BY-CATEGORY LEVEL OF DATA
=======================================================*/

function createLegend(comparable) {
  var colorRange = d3.scale.category10().domain(d3.range(11).reverse());
  $('.bar-chart').after('<div class="legend"></div>');
  var categories = _.pluck(comparable[0].stats, 'name');
  $.each(categories, function(key,value){
    var span = $('<span>'+value+'</span>');
    span.css({'border-color': d3.rgb(colorRange(key)).brighter(1)});
    span.css({'background-color': d3.rgb(colorRange(key)).darker(1)});
    $('.legend').append(span);
  })
}; //createLegend

function applyCategories(comparable) {
  var colorRange = d3.scale.category10().domain(d3.range(11).reverse());
  $('.bar').each(function(){
    var bar = $(this);
    bar.append('<div class="statsblock"></div>');
    var index = bar.attr('data-index');
    var relevantStats = _.findWhere(comparable, {'id':index})['stats'];
    $.each(relevantStats, function(key,value) {
      var stat = $('<span class="stat" data-index="'+value['name']+'" data-value="'+value['value']+'"></span>');
      stat.css({'background-color': colorRange(key)});
      bar.children('.statsblock').append(stat);
    }); //each relevantStats
  }); //each bar
}; //applyCategories




/*=======================================================
STEP 1C: CATEGORY LEVEL WIDTHS AS PROPORATION OF SPEND
=======================================================*/

function setCategoryWidths(){
  $('.bar').each(function(){
    var bar = $(this);
    var index = bar.attr('data-index');
    var relevantStats = _.findWhere(ourArray, {'id':index})['stats'];
    var barTotal = _.reduce(_.pluck(relevantStats, 'value'), function(memo,num){ return memo + num });
    $.each($(this).find('.stat'), function(stat_id,stat){
      $(stat).css({'width': $(stat).attr('data-value') / barTotal * 100 + "%"});
    })
  })  
}

// ratios of each spending category, will be used later to normalize by category spending
function setCategoryRatios(comparable) {
  var categoryTotals = _.map(comparable[0]['stats'], function(obj,iter){
    return _.reduce(_.map(comparable, function(obj2,iter2){
      return _.find(obj2.stats, function(obj3,iter3){
        return obj3.name == obj.name;
      }).value;
    }), function(memo,num){
      return memo+num
    }); //reduce
  }); //categoryTotals
  var average = _.reduce(categoryTotals, function(memo, num){ return memo + num; }, 0) / categoryTotals.length;

// Setting categoryRatios as a global variable that we can access later
  categoryRatios = [];
  $.each(categoryTotals, function(i){
    categoryRatios[i] = 1/(categoryTotals[i] / average);
  })
  categoryRatios = _.object(_.pluck(exportsToCanada[0]['stats'], 'name'), categoryRatios);

// storing the categoryRatios on the comparable object and ourArray
  comparable = _.map(comparable, function(obj,iter){
    var stats = _.map(obj.stats, function(obj2,iter2){
      obj2.normalizedValue = categoryRatios[obj2.name] * obj2.value;
      return obj2;
    }); //innermap
    obj.stats = stats;
    return obj;
  }); //map
  ourArray = comparable;
}; //setCategoryRatios



















/*=======================================================
STEP 2: User Interface Controls
=======================================================*/

function initializeControls(){
// Set up a controls box that can be style with css with .controls{}
  $('#world-container').after('<div class="controls"><h5>Controls</h5></div>');
  $('.controls').append('<div><h6>Categories Full Height:</h6><a class="cat_full_height_on">On</a><a class="cat_full_height_off">Off</a></div>')
  $('.controls').append('<div><h6>Normalize by Annual Volume ("what is the % of annual spend?"):</h6><a class="norm_tv_on">On</a><a class="norm_tv_off">Off</a></div>')
  $('.controls').append('<div><h6>Normalize by Category Size: ("what year made the biggest impact to a given category?")</h6><a class="norm_cs_on">On</a><a class="norm_cs_off">Off</a></div>')

// Set the initial state of our on/off switches
  $('.norm_tv_off').addClass('active');
  $('.norm_cs_off').addClass('active');
  $('.cat_full_height_off').addClass('active');

// Category heights
  $(document).on('click', '.cat_full_height_on', function(){
    $('.statsblock').css({'height':'100%'});
    $('.cat_full_height_on').addClass('active').siblings().removeClass('active');
  })
  $(document).on('click', '.cat_full_height_off', function(){
    $('.statsblock').css({'height':'3px'});
    $('.cat_full_height_off').addClass('active').siblings().removeClass('active');
  })

// Normalized Annual Volume
  $(document).on('click', '.norm_tv_on', function(){
    $('.bar').css({'width':'100%'});
    $('.norm_tv_on').addClass('active').siblings().removeClass('active');
  })
  $(document).on('click', '.norm_tv_off', function(){
    relativeBarWidths();
    $('.norm_tv_off').addClass('active').siblings().removeClass('active');
  })

// Normalized Category Size
  $(document).on('click', '.norm_cs_on', function(){
    normalizeCategories();
    $('.norm_cs_on').addClass('active').siblings().removeClass('active');
  })
  $(document).on('click', '.norm_cs_off', function(){
    setCategoryWidths();
    $('.norm_cs_off').addClass('active').siblings().removeClass('active');
  })
}; //initializeControls


function normalizeCategories(){
  $('.bar').each(function(){
    var bar = $(this);
    var index = bar.attr('data-index');
    var relevantStats = _.findWhere(ourArray, {'id':index})['stats'];
    var normalizedBarTotal = _.reduce(_.pluck(relevantStats, 'normalizedValue'), function(memo,num){ return memo + num });
    $.each($(this).find('.stat'), function(stat_id,stat){
      $(stat).css({'width': $(stat).attr('data-value') * categoryRatios[$(stat).attr('data-index')] / normalizedBarTotal * 100 + "%"});
    }); //each stat (category) in the bar
  }); //each bar
}; //normalizeCategories










/*=======================================================
STEP 3: HANDLE ADVANCED INTERACTION
=======================================================*/

function handleTouch(){
// Observe the "mousedown" (click + hold) event on all of our category color-bars
  $(document).on('mousedown', '.stat', function(evt){
    var self = this;
    var globaloffset = $(this).position().left;
    $('.statsblock').each(function(){
      $(this).css({'height': '100%'});
      var blockoffset = $(this).children('[data-index="'+$(self).attr('data-index')+'"]').position().left;
      $(this).animate({'left': globaloffset-blockoffset}, 200);
      $(this).parents('.bar').children('span').children('strong').text(commafy($(this).children('[data-index="'+$(self).attr('data-index')+'"]').attr('data-value')));
    }); //each

// Fade out all bars not of the category you clicked
    $('.stat:not("[data-index='+$(self).attr('data-index')+']")').css({'opacity':0.2});
    $('.stat[data-index='+$(self).attr('data-index')+']').addClass('active');
    $('.bar').css({'background-color':'transparent'});

////// OPTIONAL: Sort bars based on order
    // var barHeight = $('.bar').height() + 11;
    // var sorted = _.sortBy($('.stat[data-index="'+$(self).attr('data-index')+'"]'), function(obj,iter){
    //   return $(obj).width();
    // }); //sorted
    // _.map(sorted, function(obj,iter){
    //   var startHeight = barHeight * (iter) - $(obj).parents('.bar').position().top + 20;
    //   $(obj).parents('.bar').css({'top':startHeight}).attr('which', iter);
    // })

// Reset the position of everything wehn you release your mouse
    $(document).on('mouseup', function(){
      $('.statsblock').animate({'left':'0px', 'height': $('.cat_full_height_on').is('.active') ? '100%' : '3px'}, 200);
      $('.stat').css({'opacity':'1'}).removeClass('active');
      $('.bar').css({'top':'0px', 'background-color': 'rgba(0,0,0,0.1)'});
      $('.bar').each(function(){
        $(this).children('span').children('strong').text(commafy($(this).attr('data-value')));
      })
      $(document).off('mouseup');
    }); //documnet on mouseup
    return false;
  }) //click

}; //handleTouch

















// Make big numbers into pretty numbers
function commafy(num) {
  if (num){
    var str = num.toString().split('.');
    if (str[0].length >= 4) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.');
  }
}; //commafy

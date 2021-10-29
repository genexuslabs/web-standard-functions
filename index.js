//**********************//
//*****IMPLEMENTED*****//
//********************//
import { Cookie } from "./dist/lib-esm/types/cookie"; //Class
import { asc } from "./dist/lib-esm/text/asc";
import { addMonths } from "./dist/lib-esm/date/addMonths";
import { addYears } from "./dist/lib-esm/date/addYears";
import { age } from "./dist/lib-esm/date/age";
import { browserId } from "./dist/lib-esm/web/browserId";
import { browserVersion } from "./dist/lib-esm/web/browserVersion";
import { dayOfWeekName } from "./dist/lib-esm/date/dayOfWeekName";
import { chr } from "./dist/lib-esm/text/chr";
import { monthName } from "./dist/lib-esm/date/monthName";
import { compare } from "./dist/lib-esm/misc/compare";
import { concat } from "./dist/lib-esm/text/concat";
import { confirm } from "./dist/lib-esm/misc/confirm";
import { fromString as dFromString } from "./dist/lib-esm/date/fromString"; //Alias
import { day } from "./dist/lib-esm/date/day";
import { dayOfWeek } from "./dist/lib-esm/date/dayOfWeek";
import { toString as dToString } from "./dist/lib-esm/date/toString"; //Alias
import { endOfMonth } from "./dist/lib-esm/date/endOfMonth";
import { format } from "./dist/lib-esm/text/format";
import { fromBase64 } from "./dist/lib-esm/text/fromBase64";
import { getCookie } from "./dist/lib-esm/web/getCookie";
import { getLanguage } from "./dist/lib-esm/misc/getLanguage";
import { getMessageText } from "./dist/lib-esm/misc/getMessageText";
import { hour } from "./dist/lib-esm/datetime/hour";
import { iif } from "./dist/lib-esm/misc/iif";
import { integer } from "./dist/lib-esm/numeric/integer";
import { isNull } from "./dist/lib-esm/misc/isNull";
import { length } from "./dist/lib-esm/text/length";
import { toLower } from "./dist/lib-esm/text/toLower";
import { ltrim } from "./dist/lib-esm/text/lTrim";
import { minute } from "./dist/lib-esm/datetime/minute";
import { mod } from "./dist/lib-esm/math/mod";
import { month } from "./dist/lib-esm/date/month";
import { msg } from "./dist/lib-esm/misc/msg";
import { newLine } from "./dist/lib-esm/text/newline";
import { now } from "./dist/lib-esm/datetime/now";
import { isEmpty } from "./dist/lib-esm/misc/isEmpty";
import { emptyValue } from "./dist/lib-esm/misc/emptyValue";
import { padLeft } from "./dist/lib-esm/text/padLeft";
import { padRight } from "./dist/lib-esm/text/padRight";
import { random } from "./dist/lib-esm/math/random";
import { round } from "./dist/lib-esm/numeric/round";
import { roundToEven } from "./dist/lib-esm/numeric/roundToEven";
import { rTrim } from "./dist/lib-esm/text/rTrim";
import { second } from "./dist/lib-esm/datetime/second";
import { setCookie } from "./dist/lib-esm/web/setCookie";
import { setLanguage } from "./dist/lib-esm/misc/setLanguage";
import { space } from "./dist/lib-esm/text/space";
import { str } from "./dist/lib-esm/numeric/str";
import { replace } from "./dist/lib-esm/text/replace";
import { indexOf } from "./dist/lib-esm/text/indexOf";
import { lastIndexOf } from "./dist/lib-esm/text/lastIndexOf";
import { subString } from "./dist/lib-esm/text/subString";
import { addSeconds } from "./dist/lib-esm/datetime/addSeconds";
import { difference } from "./dist/lib-esm/datetime/difference";
import { time } from "./dist/lib-esm/datetime/time";
import { toBase64 } from "./dist/lib-esm/text/toBase64";
import { today } from "./dist/lib-esm/date/today";
import { trim } from "./dist/lib-esm/text/trim";
import { truncate } from "./dist/lib-esm/numeric/truncate";
import { toString as dtToString } from "./dist/lib-esm/datetime/toString"; //Alias
import { toUpper } from "./dist/lib-esm/text/toUpper";
import { toNumeric } from "./dist/lib-esm/text/toNumeric";
import { xsltApply } from "./dist/lib-esm/text/xsltApply";
import { year } from "./dist/lib-esm/date/year";
import { newInstance as dNewInstance } from "./dist/lib-esm/date/newInstance"; //Alias
import { newInstance as dtNewInstance } from "./dist/lib-esm/datetime/newInstance"; //Alias
import { charAt } from "./dist/lib-esm/text/charAt";
import { contains } from "./dist/lib-esm/text/contains";
import { endsWith } from "./dist/lib-esm/text/endsWith";
import { fromString as tFromString } from "./dist/lib-esm/text/fromString"; //Alias
import { isEmpty as tIsEmpty } from "./dist/lib-esm/text/isEmpty"; //Alias
import { isMatch } from "./dist/lib-esm/text/isMatch";
import { matches } from "./dist/lib-esm/text/matches";
import { removeDiacritics } from "./dist/lib-esm/text/removeDiacritics";
import { replaceRegExp } from "./dist/lib-esm/text/replaceRegExp";
import { setEmpty as tSetEmpty } from "./dist/lib-esm/text/setEmpty"; //Alias
import { splitRegExp } from "./dist/lib-esm/text/splitRegExp";
import { startsWith } from "./dist/lib-esm/text/startsWith";
import { toString as tToString } from "./dist/lib-esm/text/toString"; //Alias
import { isEmpty as bIsEmpty } from "./dist/lib-esm/bool/isEmpty"; //Alias
import { fromString as bFromString } from "./dist/lib-esm/bool/fromString"; //Alias
import { setEmpty as bSetEmpty } from "./dist/lib-esm/bool/setEmpty"; //Alias
import { toString as bToString } from "./dist/lib-esm/bool/toString"; //Alias
import { GUID } from "./dist/lib-esm/types/guid"; //Class
import { fromString as nFromString } from "./dist/lib-esm/numeric/fromString"; //Alias
import { isEmpty as nIsEmpty } from "./dist/lib-esm/numeric/isEmpty"; //Alias
import { setEmpty as nSetEmpty } from "./dist/lib-esm/numeric/setEmpty"; //Alias
import { toString as nToString } from "./dist/lib-esm/numeric/toString"; //Alias
import { addDays } from "./dist/lib-esm/date/addDays";
import { isEmpty as dIsEmpty } from "./dist/lib-esm/date/isEmpty"; //Alias
import { set as dSet } from "./dist/lib-esm/date/set"; //Alias
import { setEmpty as dtSetEmpty } from "./dist/lib-esm/datetime/setEmpty"; //Alias
import { toDate as dToDate } from "./dist/lib-esm/date/toDate"; //Alias
import { addHours } from "./dist/lib-esm/datetime/addHours";
import { addMilliseconds } from "./dist/lib-esm/datetime/addMilliseconds";
import { addMinutes } from "./dist/lib-esm/datetime/addMinutes";
import { currentOffset } from "./dist/lib-esm/datetime/currentOffset";
import { fromString as dtFromString } from "./dist/lib-esm/datetime/fromString"; //Alias
import { fromTimezone } from "./dist/lib-esm/datetime/fromTimezone";
import { getTimezone } from "./dist/lib-esm/datetime/getTimezone";
import { millisecond } from "./dist/lib-esm/datetime/millisecond";
import { setTimezone } from "./dist/lib-esm/datetime/setTimezone";
import { toDate as dtToDate } from "./dist/lib-esm/datetime/toDate"; //Alias
import { toUniversalTime } from "./dist/lib-esm/datetime/toUniversalTime";
import { set as csSet } from "./dist/lib-esm/gxcore/client/client-storage/set"; //Alias
import { get } from "./dist/lib-esm/gxcore/client/client-storage/get";
import { remove } from "./dist/lib-esm/gxcore/client/client-storage/remove";
import { clear } from "./dist/lib-esm/gxcore/client/client-storage/clear";
import { GeneXusClientClientInformation } from "./dist/lib-esm/gxcore/client/client-information"; //Class
import { GeneXusClientSocket } from "./dist/lib-esm/gxcore/client/client-socket"; //Class
import { collapseTarget } from "./dist/lib-esm/gxcore/common/ui/navigation";
import { expandTarget } from "./dist/lib-esm/gxcore/common/ui/navigation";
import { hideTarget } from "./dist/lib-esm/gxcore/common/ui/navigation";
import { showTarget } from "./dist/lib-esm/gxcore/common/ui/navigation";
import { schedule } from "./dist/lib-esm/gxcore/sd/calendar/schedule";
import { canOpen } from "./dist/lib-esm/gxcore/sd/interop/canOpen";
import { setBadgeText } from "./dist/lib-esm/gxcore/sd/interop/setBadgeText";
import { openInBrowser } from "./dist/lib-esm/gxcore/sd/interop/openInBrowser";
import { placeCall } from "./dist/lib-esm/gxcore/sd/interop/placeCall";
import { sendEmail } from "./dist/lib-esm/gxcore/sd/interop/sendEmail";
import { takePhoto } from "./dist/lib-esm/gxcore/sd/media/camera/takePhoto";
import { recordVideo } from "./dist/lib-esm/gxcore/sd/media/camera/recordVideo";
import { chooseImage } from "./dist/lib-esm/gxcore/sd/media/photoLibrary/chooseImage";
import { GeneXusSDNetwork } from "./dist/lib-esm/gxcore/sd/network"; //Class
import { GeneXusSDSynchronizationSynchronizationEvents } from "./dist/lib-esm/gxcore/sd/synchronization/synchronizationEvents"; //Class
import { shareText } from "./dist/lib-esm/gxcore/social/share/shareText";
import { XMLReader } from "./dist/lib-esm/types/xmlreader"; //Class
import { XMLWriter } from "./dist/lib-esm/types/xmlwriter"; //Class
import { GeneXusCommonLog } from "./dist/lib-esm/gxcore/common/log"; //Class
import { GeneXusCommonGeolocation } from "./dist/lib-esm/gxcore/common/geolocation"; //Class
import { GeneXusSDScanner } from "./dist/lib-esm/generator/out/not_implemented"; //Class
//**********************//
//***NOT IMPLEMENTED***//
//********************//
//**********************//
//****Core****//
import { ask } from "./dist/lib-esm/generator/out/not_implemented";
import { byteCount } from "./dist/lib-esm/generator/out/not_implemented";
import { cols } from "./dist/lib-esm/generator/out/not_implemented";
import { decrypt64 } from "./dist/lib-esm/generator/out/not_implemented";
import { dFRClose } from "./dist/lib-esm/generator/out/not_implemented";
import { dFRGDate } from "./dist/lib-esm/generator/out/not_implemented";
import { dFRGNum } from "./dist/lib-esm/generator/out/not_implemented";
import { dFRGTxt } from "./dist/lib-esm/generator/out/not_implemented";
import { dFRNext } from "./dist/lib-esm/generator/out/not_implemented";
import { dFROpen } from "./dist/lib-esm/generator/out/not_implemented";
import { dFWClose } from "./dist/lib-esm/generator/out/not_implemented";
import { dFWNext } from "./dist/lib-esm/generator/out/not_implemented";
import { dFWOpen } from "./dist/lib-esm/generator/out/not_implemented";
import { dFWPDate } from "./dist/lib-esm/generator/out/not_implemented";
import { dFWPNum } from "./dist/lib-esm/generator/out/not_implemented";
import { dFWPTxt } from "./dist/lib-esm/generator/out/not_implemented";
import { encrypt64 } from "./dist/lib-esm/generator/out/not_implemented";
import { exists } from "./dist/lib-esm/generator/out/not_implemented";
import { fileExist } from "./dist/lib-esm/generator/out/not_implemented";
import { getDataStore } from "./dist/lib-esm/generator/out/not_implemented";
import { getEncryptionKey } from "./dist/lib-esm/generator/out/not_implemented";
import { getLocation } from "./dist/lib-esm/generator/out/not_implemented";
import { getSOAPErr } from "./dist/lib-esm/generator/out/not_implemented";
import { getSOAPErrMsg } from "./dist/lib-esm/generator/out/not_implemented";
import { getTheme } from "./dist/lib-esm/generator/out/not_implemented";
import { gXGetMLi } from "./dist/lib-esm/generator/out/not_implemented";
import { gXMLines } from "./dist/lib-esm/generator/out/not_implemented";
import { hTMLClean } from "./dist/lib-esm/generator/out/not_implemented";
import { urlEncode } from "./dist/lib-esm/generator/out/not_implemented";
import { link } from "./dist/lib-esm/generator/out/not_implemented";
import { loadBitmap } from "./dist/lib-esm/generator/out/not_implemented";
import { openDocument } from "./dist/lib-esm/generator/out/not_implemented";
import { pathToUrl } from "./dist/lib-esm/generator/out/not_implemented";
import { printDocument } from "./dist/lib-esm/generator/out/not_implemented";
import { readRegKey } from "./dist/lib-esm/generator/out/not_implemented";
import { remoteAddr } from "./dist/lib-esm/generator/out/not_implemented";
import { returnOnClick } from "./dist/lib-esm/generator/out/not_implemented";
import { rGB } from "./dist/lib-esm/generator/out/not_implemented";
import { rows } from "./dist/lib-esm/generator/out/not_implemented";
import { rSeed } from "./dist/lib-esm/generator/out/not_implemented";
import { serverDate } from "./dist/lib-esm/generator/out/not_implemented";
import { serverNow } from "./dist/lib-esm/generator/out/not_implemented";
import { serverTime } from "./dist/lib-esm/generator/out/not_implemented";
import { setTheme } from "./dist/lib-esm/generator/out/not_implemented";
import { setUserId } from "./dist/lib-esm/generator/out/not_implemented";
import { setWrkSt } from "./dist/lib-esm/generator/out/not_implemented";
import { shell } from "./dist/lib-esm/generator/out/not_implemented";
import { sleep } from "./dist/lib-esm/generator/out/not_implemented";
import { sysDate } from "./dist/lib-esm/generator/out/not_implemented";
import { sysTime } from "./dist/lib-esm/generator/out/not_implemented";
import { toFormattedString } from "./dist/lib-esm/generator/out/not_implemented";
import { userCls } from "./dist/lib-esm/generator/out/not_implemented";
import { userID } from "./dist/lib-esm/generator/out/not_implemented";
import { writeRegKey } from "./dist/lib-esm/generator/out/not_implemented";
import { wrkSt } from "./dist/lib-esm/generator/out/not_implemented";
import { xToD } from "./dist/lib-esm/generator/out/not_implemented";
import { set } from "./dist/lib-esm/generator/out/not_implemented";
import { confirmed } from "./dist/lib-esm/generator/out/not_implemented";
import { cursor } from "./dist/lib-esm/generator/out/not_implemented";
import { deleteFile } from "./dist/lib-esm/generator/out/not_implemented";
import { setEnvProperty } from "./dist/lib-esm/generator/out/not_implemented";
import { errorhandler } from "./dist/lib-esm/generator/out/not_implemented";
import { outputfile } from "./dist/lib-esm/generator/out/not_implemented";
import { order } from "./dist/lib-esm/generator/out/not_implemented";
import { level } from "./dist/lib-esm/generator/out/not_implemented";
import { modified } from "./dist/lib-esm/generator/out/not_implemented";
import { old } from "./dist/lib-esm/generator/out/not_implemented";
import { previous } from "./dist/lib-esm/generator/out/not_implemented";
import { accept } from "./dist/lib-esm/generator/out/not_implemented";
import { add } from "./dist/lib-esm/generator/out/not_implemented";
import { allowNulls } from "./dist/lib-esm/generator/out/not_implemented";
import { defaultmode } from "./dist/lib-esm/generator/out/not_implemented";
import { equal } from "./dist/lib-esm/generator/out/not_implemented";
import { error } from "./dist/lib-esm/generator/out/not_implemented";
import { refMsg } from "./dist/lib-esm/generator/out/not_implemented";
import { submit } from "./dist/lib-esm/generator/out/not_implemented";
import { subtract } from "./dist/lib-esm/generator/out/not_implemented";
import { update } from "./dist/lib-esm/generator/out/not_implemented";
import { workfilelines } from "./dist/lib-esm/generator/out/not_implemented";
import { calculate } from "./dist/lib-esm/generator/out/not_implemented";
import { search } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****Numeric****//
//**********************//
//****Character****//
import { cHtmlClean } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****Date****//
//**********************//
//****Image****//
//**********************//
//****LongVarchar****//
import { lHtmlClean } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****DateTime****//
import { dtSet } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****Varchar****//
import { vHtmlClean } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****Binary****//
import { toBase64String } from "./dist/lib-esm/generator/out/not_implemented";
import { binaryFromBase64String } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****Boolean****//
//**********************//
//****HttpClient****//
import { addAuthentication } from "./dist/lib-esm/generator/out/not_implemented";
import { addProxyAuthentication } from "./dist/lib-esm/generator/out/not_implemented";
import { httpClientAddFile } from "./dist/lib-esm/generator/out/not_implemented";
import { httpClientAddHeader } from "./dist/lib-esm/generator/out/not_implemented";
import { httpClientAddString } from "./dist/lib-esm/generator/out/not_implemented";
import { addVariable } from "./dist/lib-esm/generator/out/not_implemented";
import { execute } from "./dist/lib-esm/generator/out/not_implemented";
import { httpClientGetHeader } from "./dist/lib-esm/generator/out/not_implemented";
import { httpClientToFile } from "./dist/lib-esm/generator/out/not_implemented";
import { httpClientToString } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****HttpResponse****//
import { addHeader } from "./dist/lib-esm/generator/out/not_implemented";
import { addString } from "./dist/lib-esm/generator/out/not_implemented";
import { addFile } from "./dist/lib-esm/generator/out/not_implemented";
import { httpResponseSetCookie } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****HttpRequest****//
import { httpRequestToString } from "./dist/lib-esm/generator/out/not_implemented";
import { toFile } from "./dist/lib-esm/generator/out/not_implemented";
import { getHeader } from "./dist/lib-esm/generator/out/not_implemented";
import { getVariable } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****StringCollection****//
import { strCollectionClear } from "./dist/lib-esm/generator/out/not_implemented";
import { strCollectionAdd } from "./dist/lib-esm/generator/out/not_implemented";
import { strCollectionItem } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****WebSession****//
import { websessionClear } from "./dist/lib-esm/generator/out/not_implemented";
import { destroy } from "./dist/lib-esm/generator/out/not_implemented";
import { websessionGet } from "./dist/lib-esm/generator/out/not_implemented";
import { websessionRemove } from "./dist/lib-esm/generator/out/not_implemented";
import { websessionSet } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****WebWrapper****//
import { getResponse } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****Variant****//
//**********************//
//****Location****//
//**********************//
//****RegExMatch****//
//**********************//
//****RegExMatchCollection****//
//**********************//
//****ContentInfo****//
//**********************//
//****Blob****//
//**********************//
//****SearchResult****//
import { items } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****SearchResultCollection****//
import { searchResultCollectionItem } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****SearchResultItem****//
//**********************//
//****Collection****//
import { collectionAdd } from "./dist/lib-esm/generator/out/not_implemented";
import { collectionClear } from "./dist/lib-esm/generator/out/not_implemented";
import { collectionItem } from "./dist/lib-esm/generator/out/not_implemented";
import { collectionRemove } from "./dist/lib-esm/generator/out/not_implemented";
import { collectionIndexOf } from "./dist/lib-esm/generator/out/not_implemented";
import { collectionToXml } from "./dist/lib-esm/generator/out/not_implemented";
import { collectionFromXml } from "./dist/lib-esm/generator/out/not_implemented";
import { collectionFromXmlFile } from "./dist/lib-esm/generator/out/not_implemented";
import { collectionToJson } from "./dist/lib-esm/generator/out/not_implemented";
import { collectionFromJson } from "./dist/lib-esm/generator/out/not_implemented";
import { collectionFromJsonFile } from "./dist/lib-esm/generator/out/not_implemented";
import { collectionClone } from "./dist/lib-esm/generator/out/not_implemented";
import { sort } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****BusinessComponentCollection****//
import { bcCollectionGetByKey } from "./dist/lib-esm/generator/out/not_implemented";
import { bcCollectionRemoveByKey } from "./dist/lib-esm/generator/out/not_implemented";
import { bcCollectionUpdate } from "./dist/lib-esm/generator/out/not_implemented";
import { bcCollectionInsert } from "./dist/lib-esm/generator/out/not_implemented";
import { bcCollectionInsertOrUpdate } from "./dist/lib-esm/generator/out/not_implemented";
import { bcCollectionDelete } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****BusinessComponentLinesCollection****//
import { getByKey } from "./dist/lib-esm/generator/out/not_implemented";
import { removeByKey } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****HTMLBODY****//
//**********************//
//****File****//
import { fileDelete } from "./dist/lib-esm/generator/out/not_implemented";
import { fileExists } from "./dist/lib-esm/generator/out/not_implemented";
import { fileRename } from "./dist/lib-esm/generator/out/not_implemented";
import { copy } from "./dist/lib-esm/generator/out/not_implemented";
import { fileGetName } from "./dist/lib-esm/generator/out/not_implemented";
import { fileGetAbsoluteName } from "./dist/lib-esm/generator/out/not_implemented";
import { getURI } from "./dist/lib-esm/generator/out/not_implemented";
import { getLength } from "./dist/lib-esm/generator/out/not_implemented";
import { getLastModified } from "./dist/lib-esm/generator/out/not_implemented";
import { getPath } from "./dist/lib-esm/generator/out/not_implemented";
import { fileOpen } from "./dist/lib-esm/generator/out/not_implemented";
import { openWrite } from "./dist/lib-esm/generator/out/not_implemented";
import { openRead } from "./dist/lib-esm/generator/out/not_implemented";
import { fileClose } from "./dist/lib-esm/generator/out/not_implemented";
import { readLine } from "./dist/lib-esm/generator/out/not_implemented";
import { readAllText } from "./dist/lib-esm/generator/out/not_implemented";
import { readAllLines } from "./dist/lib-esm/generator/out/not_implemented";
import { writeLine } from "./dist/lib-esm/generator/out/not_implemented";
import { writeAllText } from "./dist/lib-esm/generator/out/not_implemented";
import { writeAllLines } from "./dist/lib-esm/generator/out/not_implemented";
import { appendAllText } from "./dist/lib-esm/generator/out/not_implemented";
import { appendAllLines } from "./dist/lib-esm/generator/out/not_implemented";
import { fileCreate } from "./dist/lib-esm/generator/out/not_implemented";
import { fileXsltApply } from "./dist/lib-esm/generator/out/not_implemented";
import { fileHtmlClean } from "./dist/lib-esm/generator/out/not_implemented";
import { fromBase64String } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****FileCollection****//
import { fileCollectionItem } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****Directory****//
import { create } from "./dist/lib-esm/generator/out/not_implemented";
import { dirDelete } from "./dist/lib-esm/generator/out/not_implemented";
import { dirExists } from "./dist/lib-esm/generator/out/not_implemented";
import { rename } from "./dist/lib-esm/generator/out/not_implemented";
import { getName } from "./dist/lib-esm/generator/out/not_implemented";
import { getAbsoluteName } from "./dist/lib-esm/generator/out/not_implemented";
import { getFiles } from "./dist/lib-esm/generator/out/not_implemented";
import { getDirectories } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****DirectoryCollection****//
import { item } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****Properties****//
import { propSet } from "./dist/lib-esm/generator/out/not_implemented";
import { propGet } from "./dist/lib-esm/generator/out/not_implemented";
import { propRemove } from "./dist/lib-esm/generator/out/not_implemented";
import { propClear } from "./dist/lib-esm/generator/out/not_implemented";
import { propToJson } from "./dist/lib-esm/generator/out/not_implemented";
import { propFromJson } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****Property****//
//**********************//
//****Expression****//
import { evaluate } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****RegEx****//
import { getLastErrCode } from "./dist/lib-esm/generator/out/not_implemented";
import { getLastErrDescription } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****TextSearch****//
import { textSearchfind } from "./dist/lib-esm/generator/out/not_implemented";
import { textSearchadd } from "./dist/lib-esm/generator/out/not_implemented";
import { textSearchupdate } from "./dist/lib-esm/generator/out/not_implemented";
import { textSearchdelete } from "./dist/lib-esm/generator/out/not_implemented";
import { buildDictionary } from "./dist/lib-esm/generator/out/not_implemented";
import { checkSpell } from "./dist/lib-esm/generator/out/not_implemented";
import { reindexAll } from "./dist/lib-esm/generator/out/not_implemented";
import { hTMLPreview } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****Window****//
import { windowOpen } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****Video****//
import { videoFromURL } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****Audio****//
import { fromURL } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****BinaryFile****//
import { binaryFileFromURL } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****CallOptions****//
//**********************//
//****CryptoHash****//
import { compute } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****Geography****//
import { geographyToString } from "./dist/lib-esm/generator/out/not_implemented";
import { geographyToGeoJson } from "./dist/lib-esm/generator/out/not_implemented";
import { geographyToWkt } from "./dist/lib-esm/generator/out/not_implemented";
import { toGeoPoint } from "./dist/lib-esm/generator/out/not_implemented";
import { toGeoLine } from "./dist/lib-esm/generator/out/not_implemented";
import { toGeoPolygon } from "./dist/lib-esm/generator/out/not_implemented";
import { geographyIsNull } from "./dist/lib-esm/generator/out/not_implemented";
import { geographySetNull } from "./dist/lib-esm/generator/out/not_implemented";
import { geographyIsEmpty } from "./dist/lib-esm/generator/out/not_implemented";
import { geographySetEmpty } from "./dist/lib-esm/generator/out/not_implemented";
import { geographyIsNullOrEmpty } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****GeoPoint****//
import { geopointToGeography } from "./dist/lib-esm/generator/out/not_implemented";
import { geopointToString } from "./dist/lib-esm/generator/out/not_implemented";
import { geopointToGeoJson } from "./dist/lib-esm/generator/out/not_implemented";
import { toWKT } from "./dist/lib-esm/generator/out/not_implemented";
import { geopointIsNull } from "./dist/lib-esm/generator/out/not_implemented";
import { geopointSetNull } from "./dist/lib-esm/generator/out/not_implemented";
import { geopointIsEmpty } from "./dist/lib-esm/generator/out/not_implemented";
import { geopointSetEmpty } from "./dist/lib-esm/generator/out/not_implemented";
import { geopointIsNullOrEmpty } from "./dist/lib-esm/generator/out/not_implemented";
import { newGeopoint } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****GeoLine****//
import { geolineToGeography } from "./dist/lib-esm/generator/out/not_implemented";
import { geolineToString } from "./dist/lib-esm/generator/out/not_implemented";
import { geolineToGeoJson } from "./dist/lib-esm/generator/out/not_implemented";
import { geolineToWkt } from "./dist/lib-esm/generator/out/not_implemented";
import { geolineIsNull } from "./dist/lib-esm/generator/out/not_implemented";
import { geolineSetNull } from "./dist/lib-esm/generator/out/not_implemented";
import { geolineIsEmpty } from "./dist/lib-esm/generator/out/not_implemented";
import { geolineSetEmpty } from "./dist/lib-esm/generator/out/not_implemented";
import { geolineIsNullOrEmpty } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****GeoPolygon****//
import { geopolygonToGeography } from "./dist/lib-esm/generator/out/not_implemented";
import { geopolygonToString } from "./dist/lib-esm/generator/out/not_implemented";
import { geopolygonToGeoJson } from "./dist/lib-esm/generator/out/not_implemented";
import { geopolygonToWkt } from "./dist/lib-esm/generator/out/not_implemented";
import { geopolygonIsNull } from "./dist/lib-esm/generator/out/not_implemented";
import { geopolygonSetNull } from "./dist/lib-esm/generator/out/not_implemented";
import { geopolygonIsEmpty } from "./dist/lib-esm/generator/out/not_implemented";
import { geopolygonSetEmpty } from "./dist/lib-esm/generator/out/not_implemented";
import { geopolygonIsNullOrEmpty } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****WSAddressing****//
//**********************//
//****WSAddressingEndPoint****//
//**********************//
//****WSSecurity****//
//**********************//
//****WSSignature****//
//**********************//
//****WSEncryption****//
//**********************//
//****WSSecurityKeyStore****//
//**********************//
//****Cache****//
import { getCache } from "./dist/lib-esm/generator/out/not_implemented";
import { clearAllCaches } from "./dist/lib-esm/generator/out/not_implemented";
import { cacheSet } from "./dist/lib-esm/generator/out/not_implemented";
import { cacheGet } from "./dist/lib-esm/generator/out/not_implemented";
import { cacheContains } from "./dist/lib-esm/generator/out/not_implemented";
import { cacheRemove } from "./dist/lib-esm/generator/out/not_implemented";
import { cacheClear } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****StorageProvider****//
import { getPrivate } from "./dist/lib-esm/generator/out/not_implemented";
import { uploadPrivate } from "./dist/lib-esm/generator/out/not_implemented";
import { storageProviderGet } from "./dist/lib-esm/generator/out/not_implemented";
import { upload } from "./dist/lib-esm/generator/out/not_implemented";
import { download } from "./dist/lib-esm/generator/out/not_implemented";
import { downloadPrivate } from "./dist/lib-esm/generator/out/not_implemented";
import { getDirectory } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****ArrayPEM****//
//**********************//
//****BusinessComponentLevel****//
//**********************//
//****BusinessComponent****//
import { check } from "./dist/lib-esm/generator/out/not_implemented";
import { bcDelete } from "./dist/lib-esm/generator/out/not_implemented";
import { load } from "./dist/lib-esm/generator/out/not_implemented";
import { mode } from "./dist/lib-esm/generator/out/not_implemented";
import { bcSave } from "./dist/lib-esm/generator/out/not_implemented";
import { bcToXml } from "./dist/lib-esm/generator/out/not_implemented";
import { bcFromXml } from "./dist/lib-esm/generator/out/not_implemented";
import { bcFromXmlFile } from "./dist/lib-esm/generator/out/not_implemented";
import { bcToJson } from "./dist/lib-esm/generator/out/not_implemented";
import { bcFromJson } from "./dist/lib-esm/generator/out/not_implemented";
import { bcFromJsonFile } from "./dist/lib-esm/generator/out/not_implemented";
import { bcUpdate } from "./dist/lib-esm/generator/out/not_implemented";
import { insert } from "./dist/lib-esm/generator/out/not_implemented";
import { insertOrUpdate } from "./dist/lib-esm/generator/out/not_implemented";
import { success } from "./dist/lib-esm/generator/out/not_implemented";
import { fail } from "./dist/lib-esm/generator/out/not_implemented";
import { getMessages } from "./dist/lib-esm/generator/out/not_implemented";
import { bcClone } from "./dist/lib-esm/generator/out/not_implemented";
import { createBC } from "./dist/lib-esm/generator/out/not_implemented";
import { createCollection } from "./dist/lib-esm/generator/out/not_implemented";
import { bcGetValue } from "./dist/lib-esm/generator/out/not_implemented";
import { setValue } from "./dist/lib-esm/generator/out/not_implemented";
import { getMetadata } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****SDT****//
import { toXml } from "./dist/lib-esm/generator/out/not_implemented";
import { fromXml } from "./dist/lib-esm/generator/out/not_implemented";
import { fromXmlFile } from "./dist/lib-esm/generator/out/not_implemented";
import { clone } from "./dist/lib-esm/generator/out/not_implemented";
import { toJson } from "./dist/lib-esm/generator/out/not_implemented";
import { fromJson } from "./dist/lib-esm/generator/out/not_implemented";
import { fromJsonFile } from "./dist/lib-esm/generator/out/not_implemented";
import { sdtIsNull } from "./dist/lib-esm/generator/out/not_implemented";
import { setNull } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****SDTItem****//
import { sdtItemToFormattedString } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****Iterator****//
import { first } from "./dist/lib-esm/generator/out/not_implemented";
import { next } from "./dist/lib-esm/generator/out/not_implemented";
import { eof } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//********//
//**********************//
//****void****//
//**********************//
//****Timezones****//
//**********************//
//****short****//
//**********************//
//****Object****//
//**********************//
//****Messages****//
//**********************//
//****int****//
//**********************//
//****GxControlFrame****//
//**********************//
//****CallEffect****//
//**********************//
//****CallType****//
//**********************//
//****TargetSize****//
//**********************//
//****DipOrPercentage****//
//**********************//
//****GeneXus.Common.UI.Progress****//
import { show } from "./dist/lib-esm/generator/out/not_implemented";
import { showWithTitle } from "./dist/lib-esm/generator/out/not_implemented";
import { showWithTitleAndDescription } from "./dist/lib-esm/generator/out/not_implemented";
import { hide } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****GeneXus.Common.UI.Navigation****//
//**********************//
//****GeneXus.Common.Configuration.ConfigurationManager****//
import { getValue } from "./dist/lib-esm/generator/out/not_implemented";
import { hasValue } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****GeneXus.Common.Clipboard****//
import { setText } from "./dist/lib-esm/generator/out/not_implemented";
import { getText } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****GeneXus.Common.Analytics****//
import { trackView } from "./dist/lib-esm/generator/out/not_implemented";
import { trackEvent } from "./dist/lib-esm/generator/out/not_implemented";
import { trackPurchase } from "./dist/lib-esm/generator/out/not_implemented";
import { setAnalyticsUserId } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****GeneXus.Common.Geolocation****//
//**********************//
//****GeneXus.Common.Server****//
import { invalidateCache } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****GeneXus.Common.Runtime****//
//**********************//
//****GeneXus.Common.Maps****//
import { calculateDirections } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****GeneXus.Client.ClientInformation****//
//**********************//
//****GeneXus.Client.ClientStorage****//
import { secureSet } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****GeneXus.Social.Facebook****//
import { postToWall } from "./dist/lib-esm/generator/out/not_implemented";
import { shareLink } from "./dist/lib-esm/generator/out/not_implemented";
import { fbShareImage } from "./dist/lib-esm/generator/out/not_implemented";
import { shareVideo } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****GeneXus.Social.Twitter****//
import { tweet } from "./dist/lib-esm/generator/out/not_implemented";
import { follow } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****GeneXus.Social.Share****//
import { shareImage } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****GeneXus.Server.Socket****//
import { notify } from "./dist/lib-esm/generator/out/not_implemented";
import { notifyClient } from "./dist/lib-esm/generator/out/not_implemented";
import { broadcast } from "./dist/lib-esm/generator/out/not_implemented";
import { notifyClientText } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****GeneXus.SD.Synchronization.Synchronization****//
//**********************//
//****GeneXus.SD.iOS.Permissions****//
import { requestUserNotificationsPermission } from "./dist/lib-esm/generator/out/not_implemented";
import { requestLocationPermissionWhenInUse } from "./dist/lib-esm/generator/out/not_implemented";
import { requestLocationPermissionAlways } from "./dist/lib-esm/generator/out/not_implemented";
import { requestRemoteNotificationsPermission } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****GeneXus.SD.Store.StoreManager****//
import { getProducts } from "./dist/lib-esm/generator/out/not_implemented";
import { purchaseProduct } from "./dist/lib-esm/generator/out/not_implemented";
import { getPurchases } from "./dist/lib-esm/generator/out/not_implemented";
import { consumeProduct } from "./dist/lib-esm/generator/out/not_implemented";
import { restorePurchases } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****GeneXus.SD.Notifications.NotificationsConfiguration****//
//**********************//
//****GeneXus.SD.Notifications.RemoteNotificationResult****//
//**********************//
//****GeneXus.SD.Notifications.NotificationParameters****//
import { setParameter } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****GeneXus.SD.Notifications.RemoteNotifications****//
import { call } from "./dist/lib-esm/generator/out/not_implemented";
import { iOSSetBadge } from "./dist/lib-esm/generator/out/not_implemented";
import { iOSResetBadge } from "./dist/lib-esm/generator/out/not_implemented";
import { callAction } from "./dist/lib-esm/generator/out/not_implemented";
import { openSession } from "./dist/lib-esm/generator/out/not_implemented";
import { remoteNotificationAdd } from "./dist/lib-esm/generator/out/not_implemented";
import { send } from "./dist/lib-esm/generator/out/not_implemented";
import { setConfiguration } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****GeneXus.SD.Notifications.LocalNotifications****//
import { createAlerts } from "./dist/lib-esm/generator/out/not_implemented";
import { listAlerts } from "./dist/lib-esm/generator/out/not_implemented";
import { removeAlerts } from "./dist/lib-esm/generator/out/not_implemented";
import { removeAllAlerts } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****GeneXus.SD.Media.Camera****//
//**********************//
//****GeneXus.SD.Media.PhotoLibrary****//
import { savePhoto } from "./dist/lib-esm/generator/out/not_implemented";
import { saveVideo } from "./dist/lib-esm/generator/out/not_implemented";
import { chooseVideo } from "./dist/lib-esm/generator/out/not_implemented";
import { chooseImages } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****GeneXus.SD.Media.Audio****//
import { play } from "./dist/lib-esm/generator/out/not_implemented";
import { playBackground } from "./dist/lib-esm/generator/out/not_implemented";
import { audioStop } from "./dist/lib-esm/generator/out/not_implemented";
import { isPlaying } from "./dist/lib-esm/generator/out/not_implemented";
import { getQueue } from "./dist/lib-esm/generator/out/not_implemented";
import { getQueueState } from "./dist/lib-esm/generator/out/not_implemented";
import { setQueue } from "./dist/lib-esm/generator/out/not_implemented";
import { playQueue } from "./dist/lib-esm/generator/out/not_implemented";
import { pauseQueue } from "./dist/lib-esm/generator/out/not_implemented";
import { setQueueCurrentItem } from "./dist/lib-esm/generator/out/not_implemented";
import { setQueueCurrentIndex } from "./dist/lib-esm/generator/out/not_implemented";
import { setPlayerSettings } from "./dist/lib-esm/generator/out/not_implemented";
import { iOSSetShowsMiniPlayer } from "./dist/lib-esm/generator/out/not_implemented";
import { iOSDisplayFullScreenPlayer } from "./dist/lib-esm/generator/out/not_implemented";
import { iOSDismissFullScreenPlayer } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****GeneXus.SD.Media.AudioRecorder****//
import { start } from "./dist/lib-esm/generator/out/not_implemented";
import { stop } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****GeneXus.SD.Actions****//
import { login } from "./dist/lib-esm/generator/out/not_implemented";
import { loginExternal } from "./dist/lib-esm/generator/out/not_implemented";
import { logout } from "./dist/lib-esm/generator/out/not_implemented";
import { goHome } from "./dist/lib-esm/generator/out/not_implemented";
import { returnTo } from "./dist/lib-esm/generator/out/not_implemented";
import { save } from "./dist/lib-esm/generator/out/not_implemented";
import { cancel } from "./dist/lib-esm/generator/out/not_implemented";
import { deleteAction } from "./dist/lib-esm/generator/out/not_implemented";
import { takeApplicationScreenshot } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****GeneXus.SD.Contacts****//
import { addContact } from "./dist/lib-esm/generator/out/not_implemented";
import { removeContact } from "./dist/lib-esm/generator/out/not_implemented";
import { viewContact } from "./dist/lib-esm/generator/out/not_implemented";
import { getAllContacts } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****GeneXus.SD.Calendar****//
//**********************//
//****GeneXus.SD.Interop****//
import { sendMessage } from "./dist/lib-esm/generator/out/not_implemented";
import { playVideo } from "./dist/lib-esm/generator/out/not_implemented";
import { playAudio } from "./dist/lib-esm/generator/out/not_implemented";
import { sendEmailAdvanced } from "./dist/lib-esm/generator/out/not_implemented";
import { sendSMS } from "./dist/lib-esm/generator/out/not_implemented";
import { clearCache } from "./dist/lib-esm/generator/out/not_implemented";
import { iOSSetBadgeNumber } from "./dist/lib-esm/generator/out/not_implemented";
import { setBadgeNumber } from "./dist/lib-esm/generator/out/not_implemented";
import { iOSSetSelectedTabIndex } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****GeneXus.SD.Scanner****//
//**********************//
//****GeneXus.SD.Network****//
//**********************//
//****GeneXus.SD.Beacons****//
import { addBeaconProximityAlert } from "./dist/lib-esm/generator/out/not_implemented";
import { addBeaconProximityAlerts } from "./dist/lib-esm/generator/out/not_implemented";
import { getBeaconProximityAlerts } from "./dist/lib-esm/generator/out/not_implemented";
import { removeBeaconProximityAlert } from "./dist/lib-esm/generator/out/not_implemented";
import { clearBeaconProximityAlerts } from "./dist/lib-esm/generator/out/not_implemented";
import { getBeaconRegionState } from "./dist/lib-esm/generator/out/not_implemented";
import { startRangingBeaconRegion } from "./dist/lib-esm/generator/out/not_implemented";
import { getRangedBeaconRegions } from "./dist/lib-esm/generator/out/not_implemented";
import { stopRangingBeaconRegion } from "./dist/lib-esm/generator/out/not_implemented";
import { getBeaconsInRange } from "./dist/lib-esm/generator/out/not_implemented";
import { startAsBeacon } from "./dist/lib-esm/generator/out/not_implemented";
import { stopAsBeacon } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****GeneXus.SD.Search****//
//**********************//
//****GeneXus.SD.DeepLink****//
//**********************//
//****GeneXus.SD.WebBrowser****//
import { webBrowserOpen } from "./dist/lib-esm/generator/out/not_implemented";
import { close } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****GeneXus.SD.DeviceAuthentication****//
import { isAvailable } from "./dist/lib-esm/generator/out/not_implemented";
import { authenticate } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****GeneXus.SD.AppLifecycle****//
//**********************//
//****GeneXus.SD.CardScanner****//
import { scanCard } from "./dist/lib-esm/generator/out/not_implemented";

//**********************//
//****BlobFile****//

export {
  //**********************//
  //*****IMPLEMENTED*****//
  //********************//
  Cookie,
  asc,
  addMonths,
  addYears,
  age,
  browserId,
  browserVersion,
  dayOfWeekName,
  chr,
  monthName,
  compare,
  concat,
  confirm,
  dFromString,
  day,
  dayOfWeek,
  dToString,
  endOfMonth,
  format,
  fromBase64,
  getCookie,
  getLanguage,
  getMessageText,
  hour,
  iif,
  integer,
  isNull,
  length,
  toLower,
  ltrim,
  minute,
  mod,
  month,
  msg,
  newLine,
  now,
  isEmpty,
  emptyValue,
  padLeft,
  padRight,
  random,
  round,
  roundToEven,
  rTrim,
  second,
  setCookie,
  setLanguage,
  space,
  str,
  replace,
  indexOf,
  lastIndexOf,
  subString,
  addSeconds,
  difference,
  time,
  toBase64,
  today,
  trim,
  truncate,
  dtToString,
  toUpper,
  toNumeric,
  xsltApply,
  year,
  dNewInstance,
  dtNewInstance,
  charAt,
  contains,
  endsWith,
  tFromString,
  tIsEmpty,
  isMatch,
  matches,
  removeDiacritics,
  replaceRegExp,
  tSetEmpty,
  splitRegExp,
  startsWith,
  tToString,
  bIsEmpty,
  bFromString,
  bSetEmpty,
  bToString,
  GUID,
  nFromString,
  nIsEmpty,
  nSetEmpty,
  nToString,
  addDays,
  dIsEmpty,
  dSet,
  dtSetEmpty,
  dToDate,
  addHours,
  addMilliseconds,
  addMinutes,
  currentOffset,
  dtFromString,
  fromTimezone,
  getTimezone,
  millisecond,
  setTimezone,
  dtToDate,
  toUniversalTime,
  csSet,
  get,
  remove,
  clear,
  GeneXusClientClientInformation,
  GeneXusClientSocket,
  collapseTarget,
  expandTarget,
  hideTarget,
  showTarget,
  schedule,
  canOpen,
  setBadgeText,
  openInBrowser,
  placeCall,
  sendEmail,
  takePhoto,
  recordVideo,
  chooseImage,
  GeneXusSDNetwork,
  GeneXusSDSynchronizationSynchronizationEvents,
  shareText,
  XMLReader,
  XMLWriter,
  GeneXusCommonLog,
  GeneXusCommonGeolocation,
  GeneXusSDScanner,
  //**********************//
  //***NOT IMPLEMENTED***//
  //********************//
  ask,
  byteCount,
  cols,
  decrypt64,
  dFRClose,
  dFRGDate,
  dFRGNum,
  dFRGTxt,
  dFRNext,
  dFROpen,
  dFWClose,
  dFWNext,
  dFWOpen,
  dFWPDate,
  dFWPNum,
  dFWPTxt,
  encrypt64,
  exists,
  fileExist,
  getDataStore,
  getEncryptionKey,
  getLocation,
  getSOAPErr,
  getSOAPErrMsg,
  getTheme,
  gXGetMLi,
  gXMLines,
  hTMLClean,
  urlEncode,
  link,
  loadBitmap,
  openDocument,
  pathToUrl,
  printDocument,
  readRegKey,
  remoteAddr,
  returnOnClick,
  rGB,
  rows,
  rSeed,
  serverDate,
  serverNow,
  serverTime,
  setTheme,
  setUserId,
  setWrkSt,
  shell,
  sleep,
  sysDate,
  sysTime,
  toFormattedString,
  userCls,
  userID,
  writeRegKey,
  wrkSt,
  xToD,
  set,
  confirmed,
  cursor,
  deleteFile,
  setEnvProperty,
  errorhandler,
  outputfile,
  order,
  level,
  modified,
  old,
  previous,
  accept,
  add,
  allowNulls,
  defaultmode,
  equal,
  error,
  refMsg,
  submit,
  subtract,
  update,
  workfilelines,
  calculate,
  search,
  cHtmlClean,
  lHtmlClean,
  dtSet,
  vHtmlClean,
  toBase64String,
  binaryFromBase64String,
  addAuthentication,
  addProxyAuthentication,
  httpClientAddFile,
  httpClientAddHeader,
  httpClientAddString,
  addVariable,
  execute,
  httpClientGetHeader,
  httpClientToFile,
  httpClientToString,
  addHeader,
  addString,
  addFile,
  httpResponseSetCookie,
  httpRequestToString,
  toFile,
  getHeader,
  getVariable,
  strCollectionClear,
  strCollectionAdd,
  strCollectionItem,
  websessionClear,
  destroy,
  websessionGet,
  websessionRemove,
  websessionSet,
  getResponse,
  items,
  searchResultCollectionItem,
  collectionAdd,
  collectionClear,
  collectionItem,
  collectionRemove,
  collectionIndexOf,
  collectionToXml,
  collectionFromXml,
  collectionFromXmlFile,
  collectionToJson,
  collectionFromJson,
  collectionFromJsonFile,
  collectionClone,
  sort,
  bcCollectionGetByKey,
  bcCollectionRemoveByKey,
  bcCollectionUpdate,
  bcCollectionInsert,
  bcCollectionInsertOrUpdate,
  bcCollectionDelete,
  getByKey,
  removeByKey,
  fileDelete,
  fileExists,
  fileRename,
  copy,
  fileGetName,
  fileGetAbsoluteName,
  getURI,
  getLength,
  getLastModified,
  getPath,
  fileOpen,
  openWrite,
  openRead,
  fileClose,
  readLine,
  readAllText,
  readAllLines,
  writeLine,
  writeAllText,
  writeAllLines,
  appendAllText,
  appendAllLines,
  fileCreate,
  fileXsltApply,
  fileHtmlClean,
  fromBase64String,
  fileCollectionItem,
  create,
  dirDelete,
  dirExists,
  rename,
  getName,
  getAbsoluteName,
  getFiles,
  getDirectories,
  item,
  propSet,
  propGet,
  propRemove,
  propClear,
  propToJson,
  propFromJson,
  evaluate,
  getLastErrCode,
  getLastErrDescription,
  textSearchfind,
  textSearchadd,
  textSearchupdate,
  textSearchdelete,
  buildDictionary,
  checkSpell,
  reindexAll,
  hTMLPreview,
  windowOpen,
  videoFromURL,
  fromURL,
  binaryFileFromURL,
  compute,
  geographyToString,
  geographyToGeoJson,
  geographyToWkt,
  toGeoPoint,
  toGeoLine,
  toGeoPolygon,
  geographyIsNull,
  geographySetNull,
  geographyIsEmpty,
  geographySetEmpty,
  geographyIsNullOrEmpty,
  geopointToGeography,
  geopointToString,
  geopointToGeoJson,
  toWKT,
  geopointIsNull,
  geopointSetNull,
  geopointIsEmpty,
  geopointSetEmpty,
  geopointIsNullOrEmpty,
  newGeopoint,
  geolineToGeography,
  geolineToString,
  geolineToGeoJson,
  geolineToWkt,
  geolineIsNull,
  geolineSetNull,
  geolineIsEmpty,
  geolineSetEmpty,
  geolineIsNullOrEmpty,
  geopolygonToGeography,
  geopolygonToString,
  geopolygonToGeoJson,
  geopolygonToWkt,
  geopolygonIsNull,
  geopolygonSetNull,
  geopolygonIsEmpty,
  geopolygonSetEmpty,
  geopolygonIsNullOrEmpty,
  getCache,
  clearAllCaches,
  cacheSet,
  cacheGet,
  cacheContains,
  cacheRemove,
  cacheClear,
  getPrivate,
  uploadPrivate,
  storageProviderGet,
  upload,
  download,
  downloadPrivate,
  getDirectory,
  check,
  bcDelete,
  load,
  mode,
  bcSave,
  bcToXml,
  bcFromXml,
  bcFromXmlFile,
  bcToJson,
  bcFromJson,
  bcFromJsonFile,
  bcUpdate,
  insert,
  insertOrUpdate,
  success,
  fail,
  getMessages,
  bcClone,
  createBC,
  createCollection,
  bcGetValue,
  setValue,
  getMetadata,
  toXml,
  fromXml,
  fromXmlFile,
  clone,
  toJson,
  fromJson,
  fromJsonFile,
  sdtIsNull,
  setNull,
  sdtItemToFormattedString,
  first,
  next,
  eof,
  show,
  showWithTitle,
  showWithTitleAndDescription,
  hide,
  getValue,
  hasValue,
  setText,
  getText,
  trackView,
  trackEvent,
  trackPurchase,
  setAnalyticsUserId,
  invalidateCache,
  calculateDirections,
  secureSet,
  postToWall,
  shareLink,
  fbShareImage,
  shareVideo,
  tweet,
  follow,
  shareImage,
  notify,
  notifyClient,
  broadcast,
  notifyClientText,
  requestUserNotificationsPermission,
  requestLocationPermissionWhenInUse,
  requestLocationPermissionAlways,
  requestRemoteNotificationsPermission,
  getProducts,
  purchaseProduct,
  getPurchases,
  consumeProduct,
  restorePurchases,
  setParameter,
  call,
  iOSSetBadge,
  iOSResetBadge,
  callAction,
  openSession,
  remoteNotificationAdd,
  send,
  setConfiguration,
  createAlerts,
  listAlerts,
  removeAlerts,
  removeAllAlerts,
  savePhoto,
  saveVideo,
  chooseVideo,
  chooseImages,
  play,
  playBackground,
  audioStop,
  isPlaying,
  getQueue,
  getQueueState,
  setQueue,
  playQueue,
  pauseQueue,
  setQueueCurrentItem,
  setQueueCurrentIndex,
  setPlayerSettings,
  iOSSetShowsMiniPlayer,
  iOSDisplayFullScreenPlayer,
  iOSDismissFullScreenPlayer,
  start,
  stop,
  login,
  loginExternal,
  logout,
  goHome,
  returnTo,
  save,
  cancel,
  deleteAction,
  takeApplicationScreenshot,
  addContact,
  removeContact,
  viewContact,
  getAllContacts,
  sendMessage,
  playVideo,
  playAudio,
  sendEmailAdvanced,
  sendSMS,
  clearCache,
  iOSSetBadgeNumber,
  setBadgeNumber,
  iOSSetSelectedTabIndex,
  addBeaconProximityAlert,
  addBeaconProximityAlerts,
  getBeaconProximityAlerts,
  removeBeaconProximityAlert,
  clearBeaconProximityAlerts,
  getBeaconRegionState,
  startRangingBeaconRegion,
  getRangedBeaconRegions,
  stopRangingBeaconRegion,
  getBeaconsInRange,
  startAsBeacon,
  stopAsBeacon,
  webBrowserOpen,
  close,
  isAvailable,
  authenticate,
  scanCard
};

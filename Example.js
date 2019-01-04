//add trace on class

$(document).on("change", ".trace", function () {


    var myID = String($(this).prop('id'));
    chkFormList(myID);

});



function chkFormList(id) {
    var result = true;
    switch (id) {
        case 'time_start':
            if (isDate($('#time_start').val()) == false) {
                chkAlert('請選填正確時間！');
                result = false;
            }
            if (Date.parse($('#time_start').val()) > Date.now()) {
                chkAlert('請勿選擇未來時間！');
                result = false;
            }
            break;
        case 'time_end':
            if (isDate($('#time_end').val()) == false) {
                chkAlert('請選填正確時間！');
                result = false;
            }
            if (Date.parse($('#time_end').val()) > Date.now()) {
                chkAlert('請勿選擇未來時間！');
                result = false;
            }
            break;
        case 'country':
            if ($('#country').val() == false) {
                chkAlert('請輸入縣市！');
                result = false;
            }
            break;
        default:
            chkAlert('還有些東西沒填的樣子');
            result = false;

    }
    return result;
}


function chkAlert(alertValue) {
    M.toast({ html: alertValue });

    //alert(alertValue);
}

//onclick="return DO_chkFormList();"
function DO_chkFormList() {
    var result = false;

    for (var tmA = 0; tmA < $("[class*='trace']").length; tmA++) {
        result = chkFormList($("[class*='trace']")[tmA].id)
        if (result == false) {
            //console.log($("[class*='trace']")[tmA]);
            setTimeout($("[class*='trace']")[tmA].focus(), 500);

            $("[class*='trace']")[tmA].click();
            return result;
        }
    }
    return result;

}
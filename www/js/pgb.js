function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
	var options = { frequency: 100 };

	navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}

var app = {
    sendSms: function() {
        var number = document.getElementById('numberTxt').value;
        var message = document.getElementById('messageTxt').value;
        console.log("number=" + number + ", message= " + message);

        //CONFIGURATION
        var options = {
            replaceLineBreaks: false, 
            android: {
                intent: 'INTENT' 
            }
        };

        var success = function () { alert('Wiadomość wysłana poprawnie'); };
        var error = function (e) { alert('Wystąpił błąd wysyłania:' + e); };
        sms.send(number, message, options, success, error);
    }
};



// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBpRMEEvYWK5XoqzSg6JDbq6s658bmQZlI",
    authDomain: "dashboard-41e73.firebaseapp.com",
    databaseURL: "https://dashboard-41e73.firebaseio.com",
    projectId: "dashboard-41e73",
    storageBucket: "dashboard-41e73.appspot.com",
    messagingSenderId: "644150057174",
    appId: "1:644150057174:web:32b3b1c85d4a553f0cd177",
    measurementId: "G-XGT6ELK5T9"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Sign in with auth auth state change 
firebase.auth().onAuthStateChanged(function (admin) {

    if (admin) {

    } else {
        alert("login to access page ");
        window.location = "index.html";
    }

});

function logout() {
    var txt;
    var r = confirm("Log out!");
    if (r == true) {
        firebase.auth().signOut().then(function () {
            // Sign-out successful.
        }).catch(function (error) {
            // An error happened.
        });

    } else {
        alert("Thanks for staying back! ");
    }
}



var database = firebase.database().ref().child('UsersTable');
database.once('value', function (snapshot) {
    if (snapshot.exists()) {
        var content = '';
        var id = 0;
        snapshot.forEach(function (data) {
            var teamaddress = data.val().address;
            var teamapproved = data.val().approved;
            var teamemail = data.val().email;
            var teamlocation = data.val().location;
            var teamname = data.val().name;
            var teamphone = data.val().phone;
            var teamteam = data.val().team;
            id++;
            content += '<tr>';
            content += '<td>' + id + '</td>';
            content += '<td>' + teamname + '</td>';
            content += '<td>' + teamaddress + '</td>';
            content += '<td>' + teamemail + '</td>';
            content += '<td>' + teamphone + '</td>';
            content += '<td>' + teamlocation + '</td>';

            content += '<td>' + teamapproved + '</td>';
            content += '<td>' + teamteam + '</td>';
            content += '<td> <a class="btn btn-sm btn-primary btn-simple active">Option</a></td>';
            content += '</tr>';
        });

        $('#preventive').append(content);
    }
});


var database = firebase.database().ref().child('wew');
database.once('value', function (snapshot) {
    if (snapshot.exists()) {
        var content2 = '';
        var id2 = 0;
        snapshot.forEach(function (data) {
            var corbad1 = data.val().badequipmentpixone;
            var corbad2 = data.val().badequipmentpixtwo;
            var corcarbin = data.val().cabinetpix;
            var corcant = data.val().cantrepairreasonone;
            var corcant2 = data.val().cantrepairreasontwo;
            var corgps = data.val().gps;
            var corprocess1 = data.val().processofrepairone;
            var corprocess2 = data.val().processofrepairtwo;
            var correport = data.val().reportsection;
            var corshelter = data.val().shelterpix;
            var corstart = data.val().starttime;
            var corvoice = data.val().voicerecord;
            var corwork = data.val().workingsection;
            var corworksys = data.val().workingsystempixone;
            var corworksys2 = data.val().woringsystempixtwo;
            id2++;
            content2 += '<tr>';
            content2 += '<td>' + id2 + '</td>';
            content2 += '<td>' + corbad1 + '</td>';
            content2 += '<td>' + corbad2 + '</td>';
            content2 += '<td>' + corcarbin + '</td>';
            content2 += '<td>' + corcant + '</td>';
            content2 += '<td>' + corcant2 + '</td>';

            content2 += '<td>' + corgps + '</td>';
            content2 += '<td>' + corprocess1 + '</td>';
            content2 += '<td>' + corprocess2 + '</td>';
            content2 += '<td>' + correport + '</td>';
            content2 += '<td>' + corshelter + '</td>';
            content2 += '<td>' + corstart + '</td>';
            content2 += '<td>' + corvoice + '</td>';

            content2 += '<td>' + corwork + '</td>';
            content2 += '<td>' + corworksys + '</td>';
            content2 += '<td>' + corworksys2 + '</td>';

            content2 += '</tr>';
        });


        $('#1').append(content2);
    }
});


//Preventive report 

var rootRef = firebase.database().ref();
var urlRef = rootRef.child("PreventiveReport");
urlRef.once("value", function (snapshot) {
    snapshot.forEach(function (child) {
        var child1 = [child.key];

        var database = firebase.database().ref('PreventiveReport').child(child1[0]);

        database.once('value', function (snapshot) {
            if (snapshot.exists()) {
                var content2 = '';

                snapshot.forEach(function (data) {
                    var corbad1 = data.val().arialViewPhoto;
                    var corbad2 = data.val().arrivaltime;
                    var corcarbin = data.val().drianageonepix;
                    var corcant = data.val().drianagetwopix;
                    var corcant2 = data.val().drianagethreepix;
                    var corgps = data.val().gps;
                    var corprocess1 = data.val().environmenterrorreport;
                    var corprocess2 = data.val().fenceonepix;
                    var correport = data.val().fencethreepix;

                    var corstart = data.val().fencetwopix;
                    var corvoice = data.val().gatepix;

                    content2 += '<tr>';

                    content2 += '<td>  <img height="100px" width = "150px" src=' + corbad1 + '  alt=" Image"> </td>';
                    content2 += '<td>' + corbad2 + '</td>';
                    content2 += '<td>  <img  height="100px" width = "150px" src=' + corcarbin + '  alt="Image"> </td>';
                    content2 += '<td>  <img height="100px" width = "150px" src=' + corcant + '  alt="image"> </td>';
                    content2 += '<td>  <img  height="100px" width = "150px" src=' + corcant2 + '  alt="image"> </td>';
                    content2 += '<td>' + corprocess1 + '</td>';
                    content2 += '<td>  <img  height="100px" width = "150px" src=' + corprocess2 + '  alt="image"> </td>';
                    content2 += '<td>  <img  height="100px" width = "150px" src=' + correport + '  alt="image"> </td>';

                    content2 += '<td>  <img  height="100px" width = "150px" src=' + corstart + '  alt="image"> </td>';
                    content2 += '<td>  <img  height="100px" width = "150px" src=' + corvoice + '  alt="image"> </td>';
                    content2 += '<td>' + corgps + '</td>';
                    content2 += '</tr>';
                });


                $('#pre_arial').append(content2);
            }
            // console.log(child1);
        });
    });
});
// Corrective report 

var urlRef2 = rootRef.child("CorrectiveReport");
urlRef2.once("value", function (snapshot) {
    snapshot.forEach(function (child) {
        var child2 = [child.key];

        var database2 = firebase.database().ref('CorrectiveReport').child(child2[0]);

        database2.once('value', function (snapshot) {
            if (snapshot.exists()) {
                var cor_cont = '';

                snapshot.forEach(function (data) {
                    var cor_ap = data.val().badequipmentpixone;
                    var cor_at = data.val().arrivaltime;
                    var cor_dp = data.val().drianageonepix;
                    var cor_dp2 = data.val().drianagetwopix;
                    var cor_dp3 = data.val().drianagethreepix;
                    var cor_gps = data.val().gps;
                    var cor_er = data.val().environmenterrorreport;
                    var cor_fp = data.val().fenceonepix;
                    var cor_fp3 = data.val().fencethreepix;

                    var cor_fp2 = data.val().fencetwopix;
                    var cor_gp = data.val().gatepix;

                    cor_cont += '<tr>';

                    cor_cont += '<td>  <img height="100px" width = "150px" src=' + cor_ap + '  alt=" Image"> </td>';
                    cor_cont += '<td>' + cor_at + '</td>';
                    cor_cont += '<td>  <img  height="100px" width = "150px" src=' + cor_dp + '  alt="Image"> </td>';
                    cor_cont += '<td>  <img height="100px" width = "150px" src=' + cor_dp2 + '  alt="image"> </td>';
                    cor_cont += '<td>  <img  height="100px" width = "150px" src=' + cor_dp3 + '  alt="image"> </td>';
                    cor_cont += '<td>' + cor_er + '</td>';
                    cor_cont += '<td>  <img  height="100px" width = "150px" src=' + cor_fp + '  alt="image"> </td>';
                    cor_cont += '<td>  <img  height="100px" width = "150px" src=' + cor_fp2 + '  alt="image"> </td>';

                    cor_cont += '<td>  <img  height="100px" width = "150px" src=' + cor_fp3 + '  alt="image"> </td>';
                    cor_cont += '<td>  <img  height="100px" width = "150px" src=' + cor_gp + '  alt="image"> </td>';
                    cor_cont += '<td>' + cor_gps + '</td>';
                    cor_cont += '</tr>';
                });


                $('#cor_arial').append(cor_cont);
            }
            console.log(child2);
        
        });
    });
});
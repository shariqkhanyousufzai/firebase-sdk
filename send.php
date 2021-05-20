<?php
function sendNotification(){
    $url ="https://fcm.googleapis.com/fcm/send";

    $fields=array(
        "to"=>$_REQUEST['token'],
        "notification"=>array(
            "body"=>$_REQUEST['message'],
            "title"=>$_REQUEST['title'],
            "icon"=>'',
            "click_action"=>"https://google.com"
        )
    );

    $headers=array(
        'Authorization: key=AAAA6sR5wbc:APA91bHbuq4Syw83LdJMKN0U5qXdfQ05-rZAaKL5JT_W5fZEbjqhR9nWfu13d3BKKpKNXgtnSF8XUNJiNXhIMdr22lB8w7bhzKr-tvbzOW9gfJ3QGoo6v4I2OypHkknzt8-l6RF1YjQ2',
        'Content-Type:application/json'
    );

    $ch=curl_init();
    curl_setopt($ch,CURLOPT_URL,$url);
    curl_setopt($ch,CURLOPT_POST,true);
    curl_setopt($ch,CURLOPT_HTTPHEADER,$headers);
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
    curl_setopt($ch,CURLOPT_POSTFIELDS,json_encode($fields));
    $result=curl_exec($ch);
    print_r($result);
    curl_close($ch);
}
sendNotification();
let ex_text=document.querySelector(".experiment_text");
document.querySelector(".twit").addEventListener("click",()=>{
let tweet=ex_text.value;
tweet_list = tweet.split('\n')

while(i <= tweet_list.length){
    print(len(tweet_list[i]))
    const posibtweet= encodeURIComponent(tweet);
    const URt="https://twitter.com/intent/tweet?text=${posibtweet}";
    i++
}
window.open(URt, 'tweetwindow', 'width=650, height=470, personalbar=0, toolbar=0, scrollbars=1, sizable=1');});
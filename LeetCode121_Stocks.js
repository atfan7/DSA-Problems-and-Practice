var maxProfit = function(prices) {

    min_num =prices[0];

    max_profit =0;

    for(let i =1; i<prices.length;i++){

        if(prices[i]- min_num > max_profit){
            max_profit =prices[i] -min_num
        }

        if(prices[i]< min_num){
            min_num=prices[i];
        }



    }

    return max_profit ;



    
};
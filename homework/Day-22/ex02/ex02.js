String.prototype.getCurrency = function(currency) {
    var amount = parseFloat(this);
    
    if (isNaN(amount)) {
      return "Invalid input";
    }
    
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    });
  
    return formatter.format(amount);
  };
  
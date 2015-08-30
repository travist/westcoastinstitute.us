---
title: Payments
layout: book
book: payment
link: payment
weight: 8
---
<div class="row">
    <div class="col col-sm-6">
        <h2 id="registration" style="display:none">Thank you for registering!</h2>
        <div class="panel panel-default">
          <div class="panel-heading">Please select which programs you will be paying for today.</div>
          <div class="panel-body">
            <form>
                <div class="checkbox">
                  <label>
                    <input id="summer" type="checkbox" value="">
                    Summer Intensive Training - <strong>$<span id="summer-value">2400</span></strong>
                  </label>
                </div>
                <div class="checkbox">
                    <label>
                      <input id="advanced" type="checkbox" value="">
                      Advanced Spring Intensive - <strong>$<span id="advanced-value">1600</span></strong>
                    </label>
                </div>
                <div class="checkbox">
                    <label>
                        <input id="trainers" type="checkbox" value="">
                        Training for Trainers - <strong>$<span id="trainers-value">1600</span></strong>
                    </label>
                </div>
                <div class="checkbox">
                    <label>
                        <input id="certification" type="checkbox" value="">
                        Certification Fee - <strong>$<span id="certification-value">350</span></strong>
                    </label>
                </div>
                <div class="checkbox">
                    <label>
                        <input id="deposit" type="checkbox" value="">
                        Deposit - <strong>$<span id="deposit-value">300</span></strong>
                    </label>
                </div>
            </form>
          </div>
          <div class="panel-footer">Total: <strong>$<span id="total">0</span></strong></div>
        </div>
    </div>
    <div class="col col-sm-6">
        <div class="row">
            <div class="col col-sm-12">
                <div class="panel panel-success">
                  <div class="panel-heading">
                    <h3 class="panel-title">Online Payment</h3>
                  </div>
                  <div class="panel-body">
                    <p><strong>To pay online</strong>, please use the following form to securely send a payment to West Coast Institute for Gestalt Therapy.</p>
                    <form action="https://www.paypal.com/cgi-bin/webscr" accept-charset="UTF-8" method="post" id="payment-form" _lpchecked="1" class="form-inline">
                        <div>
                            <div class="form-group">
                                <label for="edit-amount">Amount: <span class="form-required" title="This field is required.">*</span></label>
                                <div class="input-group">
                                    <div class="input-group-addon">$</div>
                                    <input type="text" maxlength="12" name="edit-amount" id="edit-amount" size="12" value="0" class="form-control required">
                                    <div class="input-group-addon">USD</div>
                                </div>
                            </div>
                            <input type="submit" name="submit" id="edit-submit" value="Pay using PayPal" class="btn btn-primary">
                            <input type="hidden" name="currency_code" id="edit-currency-code" value="USD">
                            <input type="hidden" name="business" id="edit-business" value="felicia@feliciacarroll.com">
                            <input type="hidden" name="cmd" id="edit-cmd" value="_xclick">
                            <input type="hidden" name="item_name" id="edit-item-name" value="Payment for services">
                            <input type="hidden" name="no_shipping" id="edit-no-shipping" value="1">
                            <input type="hidden" name="return" id="edit-return" value="http://feliciacarroll.com/payment/thanks">
                            <input type="hidden" name="form_id" id="edit-payment-form" value="payment_form">
                        </div>
                    </form>
                  </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col col-sm-12" style="text-align: center;">&mdash;&mdash; OR &mdash;&mdash;</div>
        </div>
        <div class="row">
            <div class="col col-sm-12" style="margin-top: 20px;">
                <div class="panel panel-success">
                  <div class="panel-heading">
                    <h3 class="panel-title">Mail in Payment</h3>
                  </div>
                  <div class="panel-body">
                    <p><strong>To make a payment with a Check or Money Order:</strong> Make payable to <strong>West Coast Institute</strong> in USD, and send check or money order to...</p>
                    <p style="margin-left: 40px">
                        <strong>West Coast Institute<br/>540 Alisal Rd. Ste. 1<br/>Solvang, CA 93463 USA</strong>
                    </p>
                  </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
    $('input[type=checkbox]').change(function() {
        var id = $(this).attr('id');
        var value = parseInt($('#' + id + '-value').text(), 10);
        var currentValue = parseInt($('#edit-amount').val(), 10);
        var newValue = currentValue;
        newValue += this.checked ? value : -value;
        $('#edit-amount').val(newValue);
        $('#total').text(newValue);
    });

    if (QueryString.register) {
        $('#registration').show();
    }
    if (QueryString.payment) {
        var payment = (parseInt(QueryString.payment, 10) / 100).toFixed(2);
        $('#edit-amount').val(payment);
    }
</script>


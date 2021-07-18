export default function contactUsHTML() {
  return `<section class="booking-overlay">
        <div class="overlay"></div>
        <div class="scroll">
          <div class="content">
            <div>
              <button class="btn-close"></button>
            </div>
            <div class="booking">
              <div class="title">
                <h2>Get in touch!</h2>
                <h5>Get advice related to the service</h5>
              </div>
              <form class="form">
                <div class="container">
                  <div class="flex-1 mr-32px">
                    <div class="field mb-24px">
                      <label>Name</label>
                      <div class="input flex flex-ai-c">
                        <div class="icon icon-user icon-grey mr-10px"></div>
                        <input
                          name="name"
                          class="input-field"
                          type="text"
                          placeholder="Enter name"
                          value=""
                        />
                      </div>
                    </div>
                    <div class="field mb-24px">
                      <label>Email</label>
                      <div class="input flex flex-ai-c">
                        <div class="icon icon-mail icon-grey mr-10px"></div>
                        <input
                        name="email"
                          class="input-field"
                          type="text"
                          placeholder="Enter email"
                          value=""
                        />
                      </div>
                    </div>
                    <div class="field">
                      <label>Phone</label>
                      <div class="input flex flex-ai-c">
                        <div class="icon icon-phone icon-grey mr-10px"></div>
                        <input
                        name="phone"
                          class="input-field"
                          type="text"
                          placeholder="Enter phone"
                          value=""
                        />
                      </div>
                    </div>
                  </div>
                  <div class="flex-2">
                    <div class="field flex flex-col h-full">
                      <label>Message</label>
                      <div class="input flex flex-ai-c h-full flex-grow">
                        <textarea
                        name="message"
                          class="input-field"
                          cols=""
                          rows="5"
                          value=""
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="field mt-40px">
                  <label>Consultation type</label>
                  <div class="btn-selection">
                  <label><input type="checkbox" name="consultationType" value="diet" /><span class="input-btn">Diet</span></label>
                  <label><input type="checkbox" name="consultationType" value="nutrition" /><span class="input-btn">Nutrition</span></label>
                  <label><input type="checkbox" name="consultationType" value="fitness" /><span class="input-btn">Fitness</span></label>
                  <label><input type="checkbox" name="consultationType" value="fatloss" /><span class="input-btn">Fatloss</span></label>
                  </div>
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-dark submit-btn">
                    Book free consultation
                  </button>
                </div>
              </form>
              <div class="form-footer">
                <div class="hr-1"></div>
                <div class="flex flex-col">
                  <div class="col-1">
                    <div class="flex">
                      <div class="icon icon-orange icon-map-pin mr-10px"></div>
                      <p>102 Street 2410 Las, Las veges</p>
                    </div>
                    <div class="flex">
                      <div class="icon icon-orange icon-phone mr-10px"></div>
                      <p>+1 26354517</p>
                    </div>
                    <div class="flex">
                      <div class="icon icon-orange icon-mail mr-10px"></div>
                      <p>Hello@PoshN.com</p>
                    </div>
                  </div>
                  <div class="hr-2"></div>
                  <div class="col-2">
                    <div class="flex">
                      <div
                        class="icon icon-orange icon-instagram-outline mr-10px"
                      ></div>
                      <p>Instagram</p>
                    </div>
                    <div class="flex">
                      <div
                        class="icon icon-orange icon-facebook-outline mr-10px"
                      ></div>
                      <p>Facebook</p>
                    </div>
                    <div class="flex">
                      <div
                        class="icon icon-orange icon-twitter-outline mr-10px"
                      ></div>
                      <p>Twitter</p>
                    </div>
                    <div class="flex">
                      <div
                        class="icon icon-orange icon-linkedin-outline mr-10px"
                      ></div>
                      <p>LinkedIN</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>`;
}

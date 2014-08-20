class Api::DonationsController < ApplicationController

  def index
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end

  private

  def donations_params
    params.require(:donations).permit()
  end
end

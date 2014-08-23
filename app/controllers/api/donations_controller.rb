class Api::DonationsController < ApplicationController
  #before_action :set_donation, only: [:show, :edit, :update, :destroy]

  def index
    render json: child.donations
  end

  def create
    donation = child.donations.create!(donation_params)
    #render json: task, status: 201
  end

  def update
    donation.update_attributes(donation_params)
    #render nothing: true, status: 204
  end

  def destroy
    donation.destroy
    #render nothing: true, status: 204
  end

  private
  def child
    @child ||= Child.find(params[:donations_id])
  end

  def donation
    @donation ||= child.donations.find(params[:id])
  end

  def donation_params
    params.require(:donation).permit()
  end
end

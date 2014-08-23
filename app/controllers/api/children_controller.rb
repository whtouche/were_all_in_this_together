class Api::ChildrenController < ApplicationController
  #before_filter :authenticate_user!

  # GET /children
  # GET /children.json
  def index
    render json: current_user.children
  end

  def show
    render json: child
  end

  def create
    newchild = current_user.children.create!(child_params)
    render json: newchild
  end

  def update
    child.update_attributes(child_params)
    render nothing: true
  end

  def destroy
    child.destroy
    render nothing: true
  end

  private

  def child
    @child ||= Child.find(params[:id])
  end

  def child_params
    params.require(:child).permit(:first_name, :last_name, :dob)
  end
end

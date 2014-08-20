class Api::ChildrenController < ApplicationController

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

  def children_params
    params.require(:children).permit(:first_name, :last_name, )
  end
end
